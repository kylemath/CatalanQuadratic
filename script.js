// Get DOM elements
const canvas = document.getElementById('render-canvas');
const polynomialCanvas = document.getElementById('polynomial-canvas');
const stepSlider = document.getElementById('step-slider');
const stepLabel = document.getElementById('step-label');
const nextStepBtn = document.getElementById('next-step-btn');
const prevStepBtn = document.getElementById('prev-step-btn');
const resetBtn = document.getElementById('reset-btn');
const hexagonDisplay = document.getElementById('hexagon-display');

// Polynomial visualization state
let currentPolynomial = "1-x-x^2"; // The equation 1-x-x² = 0
let currentStep = 0;
let maxTriangulations = 14; // C₄ = 14 triangulations of a hexagon
let totalSteps = maxTriangulations;

// Catalan numbers array (precomputed for efficiency)
const catalanNumbers = [1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012];

// Three.js variables
let scene, camera, renderer, controls;
let hexagon, triangulation;

// Colors and materials
const COLORS = {
    background: 0x111122,
    hexagon: 0x2c3e50,
    triangulation: 0xf39c12,
    roots: 0xe74c3c,
    highlights: 0x27ae60,
    graph: {
        line: '#3498db',
        roots: '#e74c3c',
        grid: '#2c3e50',
        catalan: '#8e44ad',
        approx: '#2ecc71'
    }
};

// Initialize hexagon triangulations display
function initHexagonDisplay() {
    // Create triangulation patterns for all 14 cases (C₄)
    const patterns = [];
    
    // Define the 14 different triangulation patterns
    // Each pattern shows how to connect vertices to form triangles
    // These represent the 14 ways to subdivide a roofed hexagon (C₄)
    patterns.push([[0, 2, 5], [0, 1, 2], [2, 3, 5], [3, 4, 5]]);  // Pattern 1
    patterns.push([[0, 1, 5], [1, 4, 5], [1, 2, 4], [2, 3, 4]]);  // Pattern 2
    patterns.push([[0, 1, 5], [1, 2, 5], [2, 4, 5], [2, 3, 4]]);  // Pattern 3
    patterns.push([[0, 1, 5], [1, 3, 5], [1, 2, 3], [3, 4, 5]]);  // Pattern 4
    patterns.push([[0, 3, 5], [0, 1, 3], [1, 2, 3], [3, 4, 5]]);  // Pattern 5
    patterns.push([[0, 2, 5], [0, 1, 2], [2, 4, 5], [2, 3, 4]]);  // Pattern 6
    patterns.push([[0, 3, 5], [0, 2, 3], [0, 1, 2], [3, 4, 5]]);  // Pattern 7
    patterns.push([[0, 4, 5], [0, 3, 4], [0, 2, 3], [0, 1, 2]]);  // Pattern 8
    patterns.push([[0, 2, 5], [0, 1, 2], [2, 3, 5], [3, 4, 5]]);  // Pattern 9
    patterns.push([[0, 1, 5], [1, 2, 5], [2, 3, 5], [3, 4, 5]]);  // Pattern 10
    patterns.push([[0, 1, 5], [1, 3, 5], [1, 2, 3], [3, 4, 5]]);  // Pattern 11
    patterns.push([[0, 2, 5], [0, 1, 2], [2, 4, 5], [2, 3, 4]]);  // Pattern 12
    patterns.push([[0, 3, 5], [0, 2, 3], [0, 1, 2], [3, 4, 5]]);  // Pattern 13
    patterns.push([[0, 4, 5], [0, 3, 4], [0, 2, 3], [0, 1, 2]]);  // Pattern 14
    
    // Create a grid to display all 14 triangulations
    hexagonDisplay.innerHTML = '';
    hexagonDisplay.style.display = 'grid';
    hexagonDisplay.style.gridTemplateColumns = 'repeat(7, 1fr)';
    hexagonDisplay.style.gap = '15px';
    hexagonDisplay.style.justifyItems = 'center';
    
    // Create SVG for each triangulation
    patterns.forEach((pattern, index) => {
        const svgContainer = document.createElement('div');
        svgContainer.className = 'triangulation-svg';
        svgContainer.id = `triangulation-${index}`;
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100');
        svg.setAttribute('height', '120'); // Increased height for label
        svg.setAttribute('viewBox', '-1.2 -1.2 2.4 2.8'); // Adjusted viewBox for label
        
        // Create hexagon
        const hexagonPoints = [];
        for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 3 * i - Math.PI / 6;
            hexagonPoints.push([Math.cos(angle), Math.sin(angle)]);
        }
        
        // Draw hexagon outline
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', hexagonPoints.map(p => `${p[0]},${p[1]}`).join(' '));
        polygon.setAttribute('fill', '#f8f9fa');
        polygon.setAttribute('stroke', '#333');
        polygon.setAttribute('stroke-width', '0.05');
        svg.appendChild(polygon);
        
        // Draw the roof (top edge) in red
        const roof = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        roof.setAttribute('x1', hexagonPoints[0][0]);
        roof.setAttribute('y1', hexagonPoints[0][1]);
        roof.setAttribute('x2', hexagonPoints[1][0]);
        roof.setAttribute('y2', hexagonPoints[1][1]);
        roof.setAttribute('stroke', '#e74c3c');
        roof.setAttribute('stroke-width', '0.08');
        svg.appendChild(roof);
        
        // Draw triangulation lines
        pattern.forEach(triangle => {
            for (let i = 0; i < 3; i++) {
                const v1 = triangle[i];
                const v2 = triangle[(i + 1) % 3];
                
                // Skip drawing edges that are part of the hexagon outline
                if ((v1 === 0 && v2 === 1) || (v1 === 1 && v2 === 0) ||
                    (v1 === 1 && v2 === 2) || (v1 === 2 && v2 === 1) ||
                    (v1 === 2 && v2 === 3) || (v1 === 3 && v2 === 2) ||
                    (v1 === 3 && v2 === 4) || (v1 === 4 && v2 === 3) ||
                    (v1 === 4 && v2 === 5) || (v1 === 5 && v2 === 4) ||
                    (v1 === 5 && v2 === 0) || (v1 === 0 && v2 === 5)) {
                    continue;
                }
                
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', hexagonPoints[v1][0]);
                line.setAttribute('y1', hexagonPoints[v1][1]);
                line.setAttribute('x2', hexagonPoints[v2][0]);
                line.setAttribute('y2', hexagonPoints[v2][1]);
                line.setAttribute('stroke', '#3498db');
                line.setAttribute('stroke-width', '0.08');
                svg.appendChild(line);
            }
        });
        
        // Add vertex numbers (small labels)
        for (let i = 0; i < 6; i++) {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            // Position slightly offset from vertices
            const offsetX = 0.1 * Math.cos(Math.PI / 3 * i - Math.PI / 6);
            const offsetY = 0.1 * Math.sin(Math.PI / 3 * i - Math.PI / 6);
            text.setAttribute('x', hexagonPoints[i][0] + offsetX);
            text.setAttribute('y', hexagonPoints[i][1] + offsetY);
            text.setAttribute('font-size', '0.2');
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'central');
            text.setAttribute('fill', '#333');
            text.textContent = i;
            svg.appendChild(text);
        }
        
        // Add pattern number label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', 0);
        label.setAttribute('y', 1.8);
        label.setAttribute('font-size', '0.25');
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('fill', '#2c3e50');
        label.textContent = `Pattern ${index + 1}`;
        svg.appendChild(label);
        
        svgContainer.appendChild(svg);
        hexagonDisplay.appendChild(svgContainer);
    });
}

// Initialize the 3D scene
function init3D() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.background);
    
    // Create camera
    const aspectRatio = canvas.offsetWidth / canvas.offsetHeight;
    camera = new THREE.PerspectiveCamera(60, aspectRatio, 0.1, 1000);
    camera.position.set(0, 0, 5);
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: true,
        alpha: true 
    });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Create orbit controls for user interaction
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
    
    // Start animation loop
    animate();
}

// Create a regular hexagon
function createHexagon() {
    if (hexagon) scene.remove(hexagon);
    
    const radius = 2;
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const positions = [];
    
    // Create hexagon vertices
    for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 3 * i - Math.PI / 6;
        vertices.push(new THREE.Vector3(
            radius * Math.cos(angle),
            radius * Math.sin(angle),
            0
        ));
    }
    
    // Create hexagon edges
    for (let i = 0; i < 6; i++) {
        positions.push(vertices[i].x, vertices[i].y, vertices[i].z);
        positions.push(vertices[(i + 1) % 6].x, vertices[(i + 1) % 6].y, vertices[(i + 1) % 6].z);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    // Create material with crystal-like appearance
    const material = new THREE.LineBasicMaterial({ 
        color: COLORS.hexagon,
        linewidth: 2,
        transparent: true,
        opacity: 0.9
    });
    
    hexagon = new THREE.LineSegments(geometry, material);
    scene.add(hexagon);
    
    // Highlight the roof (first edge) in red
    const roofGeometry = new THREE.BufferGeometry();
    const roofPositions = [
        vertices[0].x, vertices[0].y, vertices[0].z,
        vertices[1].x, vertices[1].y, vertices[1].z
    ];
    roofGeometry.setAttribute('position', new THREE.Float32BufferAttribute(roofPositions, 3));
    
    const roofMaterial = new THREE.LineBasicMaterial({
        color: COLORS.roots,
        linewidth: 3,
        transparent: false
    });
    
    const roof = new THREE.LineSegments(roofGeometry, roofMaterial);
    scene.add(roof);
    
    // Store vertices for later use in triangulation
    hexagon.userData = { vertices };
    return vertices;
}

// Visualize a specific triangulation pattern
function visualizeTriangulation(step) {
    // First create/recreate the hexagon
    const vertices = createHexagon();
    
    // Remove previous triangulation if exists
    if (triangulation) scene.remove(triangulation);
    
    // Define the triangulation patterns (same as in the static display)
    const patterns = [];
    patterns.push([[0, 2, 5], [0, 1, 2], [2, 3, 5], [3, 4, 5]]);  // Pattern 1
    patterns.push([[0, 1, 5], [1, 4, 5], [1, 2, 4], [2, 3, 4]]);  // Pattern 2
    patterns.push([[0, 1, 5], [1, 2, 5], [2, 4, 5], [2, 3, 4]]);  // Pattern 3
    patterns.push([[0, 1, 5], [1, 3, 5], [1, 2, 3], [3, 4, 5]]);  // Pattern 4
    patterns.push([[0, 3, 5], [0, 1, 3], [1, 2, 3], [3, 4, 5]]);  // Pattern 5
    patterns.push([[0, 2, 5], [0, 1, 2], [2, 4, 5], [2, 3, 4]]);  // Pattern 6
    patterns.push([[0, 3, 5], [0, 2, 3], [0, 1, 2], [3, 4, 5]]);  // Pattern 7
    patterns.push([[0, 4, 5], [0, 3, 4], [0, 2, 3], [0, 1, 2]]);  // Pattern 8
    patterns.push([[0, 2, 5], [0, 1, 2], [2, 3, 5], [3, 4, 5]]);  // Pattern 9
    patterns.push([[0, 1, 5], [1, 2, 5], [2, 3, 5], [3, 4, 5]]);  // Pattern 10
    patterns.push([[0, 1, 5], [1, 3, 5], [1, 2, 3], [3, 4, 5]]);  // Pattern 11
    patterns.push([[0, 2, 5], [0, 1, 2], [2, 4, 5], [2, 3, 4]]);  // Pattern 12
    patterns.push([[0, 3, 5], [0, 2, 3], [0, 1, 2], [3, 4, 5]]);  // Pattern 13
    patterns.push([[0, 4, 5], [0, 3, 4], [0, 2, 3], [0, 1, 2]]);  // Pattern 14
    
    // Select the current pattern
    const pattern = patterns[step % patterns.length];
    
    // Create a group for all triangulation elements
    triangulation = new THREE.Group();
    scene.add(triangulation);
    
    // Create triangulation lines
    const linesGeometry = new THREE.BufferGeometry();
    const linesPositions = [];
    
    // Create a group for triangles (faces)
    const trianglesGroup = new THREE.Group();
    triangulation.add(trianglesGroup);
    
    // Add each triangle as a separate mesh
    pattern.forEach((triangle, triangleIndex) => {
        // Create a triangle geometry
        const triangleGeometry = new THREE.BufferGeometry();
        const triangleVertices = [];
        
        // Get the three vertices of the triangle
        for (let i = 0; i < 3; i++) {
            const vertex = vertices[triangle[i]];
            triangleVertices.push(vertex.x, vertex.y, vertex.z);
        }
        
        triangleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(triangleVertices, 3));
        
        // Compute normals for proper lighting
        triangleGeometry.computeVertexNormals();
        
        // Create material with slightly random color for distinction
        const hue = (0.6 + 0.1 * triangleIndex) % 1; // blue-ish hues
        const triangleMaterial = new THREE.MeshPhongMaterial({
            color: new THREE.Color().setHSL(hue, 0.7, 0.6),
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide
        });
        
        // Create mesh and add to group
        const triangleMesh = new THREE.Mesh(triangleGeometry, triangleMaterial);
        trianglesGroup.add(triangleMesh);
        
        // Add the lines for this triangle
        for (let i = 0; i < 3; i++) {
            const v1 = vertices[triangle[i]];
            const v2 = vertices[triangle[(i + 1) % 3]];
            
            // Skip drawing edges that are part of the hexagon outline
            const edge1 = triangle[i];
            const edge2 = triangle[(i + 1) % 3];
            if ((edge1 === 0 && edge2 === 1) || (edge1 === 1 && edge2 === 0) ||
                (edge1 === 1 && edge2 === 2) || (edge1 === 2 && edge2 === 1) ||
                (edge1 === 2 && edge2 === 3) || (edge1 === 3 && edge2 === 2) ||
                (edge1 === 3 && edge2 === 4) || (edge1 === 4 && edge2 === 3) ||
                (edge1 === 4 && edge2 === 5) || (edge1 === 5 && edge2 === 4) ||
                (edge1 === 5 && edge2 === 0) || (edge1 === 0 && edge2 === 5)) {
                continue;
            }
            
            linesPositions.push(v1.x, v1.y, v1.z);
            linesPositions.push(v2.x, v2.y, v2.z);
        }
    });
    
    // Create lines for the triangulation
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linesPositions, 3));
    
    const linesMaterial = new THREE.LineBasicMaterial({ 
        color: COLORS.triangulation,
        linewidth: 2,
    });
    
    const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    triangulation.add(lines);
    
    // Add vertex labels in 3D
    for (let i = 0; i < 6; i++) {
        const vertex = vertices[i];
        
        // Create a small sphere at each vertex
        const sphereGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(vertex.x, vertex.y, vertex.z);
        triangulation.add(sphere);
    }
    
    // Animate the triangulation (gently rotate it)
    const currentAngle = triangulation.rotation.z;
    gsap.to(triangulation.rotation, {
        z: currentAngle + Math.PI * 2,
        duration: 30,
        ease: "none",
        repeat: -1
    });
    
    // Update Plotly graph to show the relationship to the solution
    // Add annotation to show partial sum up to current step
    let sum = 0;
    for (let i = 0; i <= 4; i++) { // Use first 5 Catalan numbers (including C₄)
        if (i <= step % patterns.length) {
            sum += catalanNumbers[i];
        }
    }
    
    const annotations = [
        {
            x: 0.618,
            y: 0.05,
            text: 'α = ∑Cₙ → 0.618',
            showarrow: true,
            arrowhead: 2,
            ax: 0,
            ay: -30
        }
    ];
    
    // Add annotation for current partial sum
    if (step < maxTriangulations) {
        annotations.push({
            x: sum,
            y: 0.15,
            text: `Partial sum: ${sum}`,
            showarrow: true,
            arrowhead: 2,
            ax: 0,
            ay: -20,
            font: {
                color: '#e74c3c'
            }
        });
    }
    
    Plotly.relayout('polynomial-canvas', {
        'annotations': annotations
    });
    
    // Highlight triangulation in the static display
    document.querySelectorAll('.triangulation-svg').forEach((svg, index) => {
        if (index === step) {
            svg.classList.add('active');
        } else {
            svg.classList.remove('active');
        }
    });
}

// Initialize polynomial graph
function initPolynomialGraph() {
    // Generate x values
    const x = [];
    for (let i = -0.2; i <= 1.2; i += 0.01) {
        x.push(i);
    }
    
    // Calculate y values for polynomial 1-x-x^2
    const y = x.map(val => 1 - val - Math.pow(val, 2));
    
    // Create the polynomial trace
    const polynomialTrace = {
        x: x,
        y: y,
        type: 'scatter',
        mode: 'lines',
        name: '1-α-α²',
        line: {
            color: COLORS.graph.line,
            width: 2
        }
    };
    
    // Calculate Catalan series approximations
    const catalanX = [];
    const catalanY = [];
    const catalanSums = [];
    
    // Add partial sums of Catalan numbers
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += catalanNumbers[i];
        catalanSums.push(sum);
        catalanX.push(sum);
        catalanY.push(0); // at y=0 line
    }
    
    // Create Catalan series trace
    const catalanTrace = {
        x: catalanX,
        y: catalanY,
        type: 'scatter',
        mode: 'markers',
        name: 'Catalan Series Sums',
        marker: {
            color: COLORS.graph.catalan,
            size: 8,
            symbol: 'circle'
        }
    };
    
    // Add a trace for first three terms explicitly
    const termsTrace = {
        x: [0, 0.5, 1, 1.5, 2],
        y: [0, 0, 0, 0, 0],
        type: 'scatter',
        mode: 'markers+text',
        name: 'Catalan Terms',
        text: ['', 'C₀ = 1', 'C₁ = 1', 'C₂ = 2', 'C₃ = 5'],
        textposition: 'top',
        marker: {
            color: COLORS.graph.roots,
            size: 7,
            symbol: 'circle'
        }
    };
    
    // Layout configuration
    const layout = {
        title: {
            text: 'Equation: 1-α+α² = 0',
            font: { size: 16 }
        },
        showlegend: true,
        legend: {
            x: 0.7,
            y: 1
        },
        plot_bgcolor: '#ffffff',
        paper_bgcolor: '#ffffff',
        xaxis: {
            zeroline: true,
            zerolinecolor: '#2c3e50',
            zerolinewidth: 1,
            gridcolor: '#e0e0e0',
            title: 'α',
            range: [-0.1, 1.1]
        },
        yaxis: {
            zeroline: true,
            zerolinecolor: '#2c3e50',
            zerolinewidth: 1,
            gridcolor: '#e0e0e0',
            title: 'y',
            range: [-1, 1]
        },
        annotations: [
            {
                x: 0.618,
                y: 0.05,
                text: 'α = ∑Cₙ → 0.618',
                showarrow: true,
                arrowhead: 2,
                ax: 0,
                ay: -30
            }
        ]
    };
    
    // Create the plot
    Plotly.newPlot('polynomial-canvas', [polynomialTrace, catalanTrace, termsTrace], layout, {
        responsive: true,
        displayModeBar: false
    });
}

// Update visualization based on current step
function updateVisualization() {
    stepLabel.textContent = `Pattern ${currentStep + 1} of ${maxTriangulations}`;
    visualizeTriangulation(currentStep);
    
    // Highlight the corresponding hexagon in the display
    document.querySelectorAll('.triangulation-svg').forEach((svg, index) => {
        if (index === currentStep) {
            svg.classList.add('active');
            // Scroll the current pattern into view if needed
            svg.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            svg.classList.remove('active');
        }
    });
    
    // Update polynomial display text
    const catalanSum = catalanNumbers.slice(0, currentStep + 1).reduce((sum, num) => sum + num, 0);
    const polynomialDisplay = document.querySelector('.polynomial-display');
    
    if (polynomialDisplay) {
        const displayHTML = `
            <h2>Exploring the Solution</h2>
            <p>For \(t = 1\), the equation \(1-\alpha+\alpha^2 = 0\) has the solution \(\alpha = \frac{1}{2}(1 - \sqrt{-3})\)</p>
            <p>Pattern ${currentStep + 1} shows one of the C₄ = 14 ways to triangulate a hexagon</p>
            <p>Partial sum up to C₄: \(\sum_{n=0}^{4} C_n = ${catalanSum}\), converging to \(\alpha = \frac{1}{φ} ≈ 0.618034\)</p>
        `;
        polynomialDisplay.innerHTML = displayHTML;
        
        // Refresh MathJax rendering
        if (window.MathJax) {
            MathJax.typesetPromise && MathJax.typesetPromise();
        }
    }
}

// Handle window resize
function onWindowResize() {
    camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Event listeners
nextStepBtn.addEventListener('click', () => {
    currentStep = (currentStep + 1) % maxTriangulations;
    stepSlider.value = currentStep * (100 / (maxTriangulations - 1));
    updateVisualization();
});

prevStepBtn.addEventListener('click', () => {
    currentStep = (currentStep - 1 + maxTriangulations) % maxTriangulations;
    stepSlider.value = currentStep * (100 / (maxTriangulations - 1));
    updateVisualization();
});

resetBtn.addEventListener('click', () => {
    currentStep = 0;
    stepSlider.value = 0;
    updateVisualization();
});

stepSlider.addEventListener('input', () => {
    const sliderStep = Math.round(stepSlider.value / (100 / (maxTriangulations - 1)));
    if (sliderStep !== currentStep) {
        currentStep = sliderStep;
        updateVisualization();
    }
});

// Initialize when page loads
window.addEventListener('DOMContentLoaded', () => {
    // Initialize the hexagon triangulations display
    initHexagonDisplay();
    
    // We need to wait for Three.js to be loaded
    if (typeof THREE === 'undefined') {
        // Add Three.js script if not already included in HTML
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js';
        script.onload = () => {
            // Also add OrbitControls
            const controlsScript = document.createElement('script');
            controlsScript.src = 'https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js';
            controlsScript.onload = () => {
                init3D();
                initPolynomialGraph();
                updateVisualization();
            };
            document.head.appendChild(controlsScript);
        };
        document.head.appendChild(script);
    } else {
        init3D();
        initPolynomialGraph();
        updateVisualization();
    }
}); 