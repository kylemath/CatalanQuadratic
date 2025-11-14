The American Mathematical Monthly
ISSN: (Print) (Online) Journal homepage: http://www.tandfonline.com/journals/uamm
A Hyper-Catalan Series Solution to Polynomial
Equations, and the Geode
N. J. Wildberger & Dean Rubine
To cite this article: N. J. Wildberger & Dean Rubine (2025) A Hyper-Catalan Series Solution to
Polynomial Equations, and the Geode, The American Mathematical Monthly, 132:5, 383-402,
DOI: 10.1080/00029890.2025.

To link to this article: https://doi.org/10.1080/00029890.2025.

© 2025 The Author(s). Published with
license by Taylor & Francis Group, LLC.
Published online: 08 Apr 2025.
Submit your article to this journal
Article views: 46693
View related articles
View Crossmark data
Full Terms & Conditions of access and use can be found at
https://www.tandfonline.com/action/journalInformation?journalCode=uamm
A Hyper-Catalan Series Solution to
Polynomial Equations, and the Geode
N. J. Wildberger and Dean Rubine
Abstract. The Catalan numbersCmcount the number of subdivisions of a polygon intom
triangles, and it is well known that their generating series is a solution to a particular quadratic
equation. Analogously, the hyper-Catalan numbersC m count the number of subdivisions of
a polygon into a given number of triangles, quadrilaterals, pentagons, etc. (its type m ), and
we show that their generating series solves a polynomial equation of a particular geometric
form. This solution is straightforwardly extended to solve the general univariate polynomial
equation.
A layering of this series by numbers of faces yields a remarkable factorization that reveals
the Geode , a mysterious array that appears to underlie Catalan numerics.
1. INTRODUCTION. Four millennia ago, the Babylonians could solve the system
of equationsx+y=s, xy=p, equivalent to a quadratic equation. Our modern
quadratic formula involves a square root operation, which even in ancient times was
known to generally not terminate, yielding only approximate solutions. In the sixteenth
century, Scipione del Ferro, Niccolo Tartaglia, and Gerolamo Cardano gave a similar`
but more complicated expression for the solution of a cubic equation, involving both
square and cube roots, and with Lodovico Ferrari found an even more complicated
formula in radicals for the quartic equation.
After Joseph-Louis Lagrange’s important theoretical advances bringing in nascent
ideas of group theory, the Abel/Ruffini Theorem, expanded upon byEvariste Galois, ́
showed that there is no solution in radicals to a general polynomial equation of degree
five or higher. It is our impression that students of mathematics hence perceive a major
division between the quartic and quintic cases, separating the merely complicated from
the impossible. Further investigation into these matters is now generally only of a
historical nature, as Galois theory has gone in different directions [ 1 ].
We would like to resurrect this topic and show that it has intimate connections
to a remarkable combinatorial geometry, which allows us to dramatically reconsider
what it really means to solve an algebraic equation, sidestepping the classical work on
solutions in radicals and Galois theory.
After all, if we’re permitted nested unendingnth root calculations, why not a sim-
pler ongoing sum that actually solves polynomials beyond degree four? Instead of
needing to find a new solution for each degree, why not write one formula that solves
all degrees?
Here is our geometric polynomial formula, Theorem 6. The equation:

0 = 1 −α+t 2 α^2 +t 3 α^3 +t 4 α^4 +t 5 α^5 +...
doi.org/10.1080/00029890.2025.
MSC: 05A15, 12D
© 2025 The Author(s). Published with license by Taylor & Francis Group, LLC.
This is an Open Access article distributed under the terms of the Creative Commons Attribution License
(http://creativecommons.org/licenses/by/4.0/), which permits unrestricted use, distribution, and reproduction
in any medium, provided the original work is properly cited.

May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 383

has a formal power series solution

α= S [t 2 ,t 3 ,...]≡
∑
m 2 ,m 3 ,···≥ 0
( 2 m 2 + 3 m 3 + 4 m 4 +...)!
( 1 +m 2 + 2 m 3 +...)!m 2 !m 3 !···
t
m 2
2 t
m 3
3 ···.
Arthur Erd ́elyi and Ivor Etherington [ 2 , 3 ] and others found the above coefficient as
the hyper-Catalan numberC m , which we re-express in terms of the number of vertices
and edges of a subdivided polygon of type m in Section 7. In Section 8 we use S
to approximate a root of John Wallis’s famous cubic equation, employing a natural
bootstrapping method.
A power series solution to a polynomial equation is not a new idea. In 1844, Got-
thold Eisenstein found such a solution tox^5 +x−t=0, the simplest polynomial
known not to have a general zero expressible in radicals [ 4 , 5 ]. We write down the
general quintic solution and use it to recover Eisenstein’s series for the Bring radical
in Section 9 , and discuss the natural connections with series reversion, also going back
to Lagrange, in Section 10.
The central algebraic object that we wish to emphasize is the hyper-Catalan gener-
ating series S [t 2 ,t 3 ,t 4 ,...] in an unbounded number of variables (see Section 5 ). This
is connected with the Online Encyclopedia of Integer Sequences (OEIS) [ 6 ]inmany
interesting ways (see Sections 11 and 12 ). A curious factorization involving S reveals
the mysterious Geode array which algebraically encodes the hyper-Catalan numbers.
In Section 11 , we offer several compelling conjectures about this remarkable new al-
gebraic object.

2. HISTORY. The literature on solving polynomials is vast. Here we touch on
developments that led to the series solution we present, including combinatorial,
algebraic, and analytic histories covering series reversion and hyper-Catalan objects.
In 1693, Gottfried Wilhelm Leibniz used the method of undetermined coefficients
of a power series to solve differential equations, and in 1712, Isaac Newton showed
how to revert series by that method [ 1 , 7 , 8 ]. (In 2021, the first author began his explo-
ration of polynomial solutions in much the same way [ 9 ], greatly aided by advances
in symbolic computation [ 10 – 12 ].) In 1770, Lagrange gave us a general solution to
series reversions in the form of the Lagrange Inversion Theorem [ 13 – 15 ]. The tradi-
tional results of Lagrange, Niels Henrik Abel, Paolo Ruffini, and Galois take us to the
1830’s.
The combinatorial path [ 16 , 17 ] begins in 1751 [ 18 ] with Leonhard Euler and Chris-
tian Goldbach counting triangulations of polygons, continued by Johann Andreas Seg-
ner in 1758. In 1771 Nicolas Fuss, prompted by Johann Friedrich Pfaff, generalized
the problem to polygon dissections intod-gons, which give the first slices of the hyper-
Catalan array beyond the Catalan numbers. In the 1830’s, Gabriel Lam ́e, Eugene ́
Charles Catalan, Jacques Philippe Marie Binet, Johann August Grunert, and Olinde
Rodrigues continued the research, with Catalan publishing the modern formula in
1838, and Binet using Lagrange Inversion to obtain the formula for the two-parameter
Fuss numbers in 1843. In 1870, Ernst Schroeder produced the little Schroeder num-
bers, perhaps the first one-dimensional sum over the entire hyper-Catalan array, co-
efficients of S [v, v^2 ,v^3 ,...]. In 1890, Arthur Cayley [ 19 ] considered dissections of a
polygon, publishing an array that is a 2D projection of the entire hyper-Catalan array
(summed over vertices and faces, S [vf, v^2 f, v^3 f,...]).
The algebraic path begins in 1855, when Joseph B. Mott solves a general poly-
nomial equation using undetermined coefficients in his remarkable self-published
book [ 20 ] with the subtitle “... and a New Discovery of One General Root Theorem
for the Solution of Equations of All Degrees ...,” and in an 1882 journal article [ 21 ],

384 ©c THE MATHEMATICAL ASSOCIATION OF AMERICA [Monthly 132

writing 29 terms of S that he uses to approximate roots. In 1894, James McMa-
hon [ 22 ] uses Lagrange series reversion to obtain a general form for the hyper-Catalan
coefficientC m , which he exasperatingly doesn’t quite write all together despite the
title of his short note. This is clarified in 1910 by Charles Edwin Van Orstrand [ 23 ]
and absorbed into the combinatorics literature by John Riordan in 1968 [ 15 ].
The analytic path perhaps begins in 1907 with Alfredo Capelli [ 24 , 25 ], who writes
expressions containing a hyper-Catalan coefficient while studying the behavior of roots
when polynomial coefficients are perturbed. Research is continued in 1920 by Richard
Birkeland [ 26 ], in 1921 by Giuseppe Belardinelli [ 27 ] and Hjalmar Mellin [ 28 ], and
in 1936 by Karl Mayr [ 29 ], among others (and nicely summarized by Belardinelli in
1960 [ 30 ]). Citing this work in 1940, Erdelyi and Etherington [ ́ 2 , 3 ] count polygo-
nal subdivisions of a given type, and appear to be the first to give a combinatorial
interpretation of the hyper-Catalan coefficient. In 1978, Arthur D. Sands [ 31 ] names
what we call the hyper-Catalan numbers the ‘generalized Catalan numbers,’ repeated
in 1987 by Wenchang Chu [ 32 ]. In 1992, later on the analytic path, G ̈unter Lettl [ 33 ]
comes very close to one of our formulas.
The combinatorial story continues with two articles that seem unaware of the work
of Erdelyi and Etherington and each other. In 1960, George Raney [ ́ 34 ] counts types of
well-formed expressions of compositions of functions of arbitrary arity, producing an
array slightly more general than the hyper-Catalan numbers (as unary functions exist
but 2-gons do not). In 1964, William T. Tutte [ 35 ] counts plane trees of a given type,
producing the same array, notably recognizing the connection of the Euler character-
istic involving vertices, edges and faces. This is followed up in 1975 by Ihor Zinovie
Chorneyko and S. G. Mohanty [ 36 ], in 1979 by Dana S. Richards [ 37 ], and appears in
the 1983 textbook by Ian Goulden and David Jackson [ 38 ].
In 1972, Germain Kreweras [ 39 , 40 ] counts non-crossing partitions of a cyclic
graph, independently deriving the more general array. The hyper-Catalan numbers
appear when he considers non-crossing partitions without singletons. He reproduces
Cayley’s 1890 array, describing it as, “the coefficients (or more correctly sums of
the coefficients of the terms of the same ‘weight’) of the expressions giving [a se-
ries reversion],” citing Cayley [ 19 ], Raney, 1960 [ 34 ], and Riordan, 1968 [ 15 ]. Rodica
Simion [ 41 ] offered a survey of the resulting non-crossing partition research in 2000;
see also Richard P. Stanley, 1999 [ 42 ] and Drew Armstrong, 2006 [ 43 ].
Of the literature reviewed, Mott [ 20 , 21 ] and Lettl [ 33 ] come closest to our re-
sults, with the series reversions discussed in Section 10 not far behind. In the category
of papers that initially appear relevant but are less so upon closer examination, we
list [ 44 – 46 ]; there are many others.
We now present our solution, beginning with the quadratic case.

3. CATALAN NUMBERS AND QUADRATIC EQUATIONS. The Catalan num-
bers were introduced by Euler [ 18 ] in 1751 to count subdivisions intontriangles of
a fixed planar convex(n+ 2 )-gon, for a natural numbern, with the convention that
C 0 =1. In 1838, Catalan [ 16 ] obtained the familiar modern formula:

Cn=
1
n+ 1
(
2 n
n
)
=
( 2 n)!
n!(n+ 1 )!
. (1)
We call this expression sub-multinomial , as the sum of the factorial inputs in the
denominator is one more than that of the numerator.
The Catalan sequence A000108: 1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796,
58786,···has the longest entry in the OEIS [ 6 ], and is the subject of three relatively

May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 385

recent books [ 47 – 49 ], as well as numerous research articles, for example [ 41 , 43 , 50 –
52 ]. Figure 1 illustratesC 4 =14, the 14 ways to subdivide a roofed hexagon into four
triangles.

Figure 1. C 4 =14 ways to subdivide a roofed hexagon into four triangles.
To see how the Catalan numbers relate to quadratic equations, consider
1 −α+tα^2 =0(2)
which according to the usual quadratic formula has the solution in radicals:

α=
1
2 t
( 1 ±
√
1 − 4 t).
Applying Newton’s binomial expansion to the minus sign solution [ 42 , 53 ] reveals the
generating series of the Catalan numbers as the formal power series solution:

α=
∑
n≥ 0
( 2 n)!
n!(n+ 1 )!
tn=
∑
n≥ 0
Cntn.
The result justifies the lovely identity:
( 1 +t+ 2 t^2 + 5 t^3 + 14 t^4 + 42 t^5 + ···)^2 = 1 + 2 t+ 5 t^2 + 14 t^3 + 42 t^4 + ···.
An instructive argument for why this particular αworks is suggested by the
insightful Exercise 7.22 of Concrete Mathematics [ 54 ], which Ronald Graham, Donald
Knuth, and Oren Patashnik further attribute to George Polya’s ́ On Picture Writing [ 55 ].
We describe that now.

4. MULTISET ALGEBRA WITH TRIAGONS. Define a triagon to be a planar
convex polygon with a distinguished side, referred to as the roof , with the polygon
subdivided into triangular faces by non-crossing diagonals. We regard this as a com-
binatorial object, so the orientation and indeed the shape of the triagon is secondary to
the relative position of its roof and its various triangular faces. The vertical bar|de-
notes the null triagon , a degenerate polygon with two vertices, no faces, and a single
side, its roof.

For a natural numbern= 0 , 1 , 2 ,...letTndenote the multiset of triagons with
exactlynfaces. The size ofTnis clearly the Catalan numberCn.
Of courseTncould also be viewed as a set, but we want to work in the more flexi-
ble arena of multisets where repetitions are allowed and crucially where addition is a
natural operation: just combine all the elements of the multisets together into a bigger
multiset. This is the fundamental operation underpinning the usefulness of multisets
for the foundations of arithmetic [ 56 ]. We denote multisets with square brackets [...],
without commas, as order is unimportant [ 57 ].

We now introduce the unbounded triagon multiset T, which is naturally layered
by the number of facesn:

T ≡
∑
n≥ 0
Tn.
Following Concrete Mathematics , for triagonsr 1 andr 2 , we define∇(r 1 ,r 2 )as the
triagon formed by taking a new roofed triangle and adjoiningr 1 by its roof to the left

386 ©c THE MATHEMATICAL ASSOCIATION OF AMERICA [Monthly 132

side of the new triangle andr 2 by its roof to the right side. We think about this as
hinging together the roofs ofr 1 andr 2 , and erecting a new roof on the combination.
Hence we refer to∇as the panelling operator. This binary operation is extended to
multisetsM 1 andM 2 of triagons in the obvious way:

∇(M 1 ,M 2 )≡
[
∇(r 1 ,r 2 ):r 1 ∈M 1 ,r 2 ∈M 2
]
.
Since any triagonris either the null triagon|or of the form∇(r 1 ,r 2 )for unique
triagonsr 1 andr 2 , we deduce the multiset identity:

T =
[
|
]
+∇(T,T). (3)
This is to be interpreted in a similar way to a formal power series identity: if we
consistently truncate all multiset expressions up to some fixed level, some number of
faces, then the resulting finite multiset identity holds.
We now map the algebra of multisets of triagons onto the usual algebra of poly-
nomials, via the functionψthat maps a triagonrto its accounting monomial tn,
wherenis the number of faces in the triangulation ofr. As the null triagon contains
no triangles, we haveψ(|)=t^0 =1.
Since the∇panelling operator adds a triangle, we have:

ψ(∇(r, s))=t ψ(r)ψ(s).
Subsequently, we defineon multisets of triagons as the sum ofψapplied to each
element. For a multisetMof triagons, we have the polynomial(M)≡

∑
r∈Mψ(r).
Then by linearity, or respecting addition:

(∇(M 1 ,M 2 ))=t(M 1 )(M 2 ).
Figure 2illustrates the∇panelling operator on triagons and multisets of triagons, the
map and its associated identity.

Figure 2. Panelling of triagons and their multisets, and themap.
We now extendto the triagon multisetT and introduce the triagon polyseries ,
which is the generating series for the Catalan numbers:

T = T [t]≡(T)=
∑
n≥ 0
(Tn)=
∑
n≥ 0
Cntn.
Applyingto both sides of equation ( 3 ) we get(T)=ψ(|)+(∇(T,T))or:
T = 1 +t T^2.
May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 387

Let’s agree that a polynomial with constant term 1 and linear coefficient−1is
in geometric form , so that 1−α+tα^2 is the general geometric quadratic. Then
we have demonstrated the following result, independently of the quadratic formula,
Newton’s binomial series, and Catalan’s formula.

Theorem 1 (The soft geometric quadratic formula). The equation 1−α+tα^2 = 0
has a formal power series solution:

α= T [t]=
∑
n≥ 0
Cntn
whereCncounts the number of triagons withnfaces.

We can now quickly deduce a more general formula involving variable coefficients;
the result is a multivariate power series inc 0 ,c 1 −^1 , andc 2. Please note the minus sign
on the linear term of the equation.

Theorem 2 (The soft quadratic formula). The equationc 0 −c 1 x+c 2 x^2 =0 has a
series solution:

x=
∑
n≥ 0
Cn
c^10 +nc 2 n
c^11 +^2 n
.
Proof. If we setx=

c 0
c 1
αthen the equation becomesc 0
(
1 −α+
c 0 c 2
c^21
α^2
)
=0. We
apply Theorem 1 witht=

c 0 c 2
c^21
to solve forαand then write downx.
The formula, like the general case below, fails whenc 1 =0, meaning that e.g.,
x^2 =2 is not handled by our series solution. It’s curious that the equation with the
easiest solution in radicals is the least accessible with this method. A simple change of
variables lets us skirt around the problem.

5. SUBDIGONS AND HYPER-CATALAN NUMBERS. Our aim is now to suit-
ably extend the above argument to higher degrees. The primary generalization is to
consider multisets of more generally subdivided roofed planar polygons, whose types
are counted with an extension of the Catalan numbers called the hyper-Catalan num-
bers, and then to consider the algebra obtained by panelling these subdigons together
to form larger ones.
We find the explicit formulas for the hyper-Catalan numbers in the combinatorics
literature (see Section 7 ), with precursors going back to 19th century work on reversion
of series (see Section 10 ). However, we wish to emphasize that the soft approach that
algebraically solves the general equation is formulated completely independently of
these explicit formulas.
Define a subdigon to be a planar convex roofed polygonswhich is subdivided by
non-crossing diagonals into polygonal faces. Ifsis subdivided intom 2 triangles,m 3
quadrilaterals,m 4 pentagons, and so on, then we say it is a subdigon of type m =
[m 2 ,m 3 ,m 4 ,...].Necessarily, there are only a finite number of nonzeromk, and we
agree that appending zeros does not change the type. The null subdigon|is a subdigon,
with one side, its roof, two vertices, no faces and type m =[ ], allmk=0.
Define the hyper-Catalan number C m ≡C[m 2 ,m 3 ,m 4 ,...] to be the number of
subdigons of type m. For the special case whenm 3 and up are all zeros, we recover
the usual Catalan numbersC[m]=Cm.Figure 3 illustratesC[2, 0 ,1]=28.

388 ©c THE MATHEMATICAL ASSOCIATION OF AMERICA [Monthly 132

Figure 3. C[2, 0 ,1]=28 subdigons with two triangles and a pentagon.
The number of faces in a subdigon of type m is:
F=F m =m 2 +m 3 +m 4 +...=
∑
k≥ 2
mk. (4)
To count the number of edges, we note that the null subdigon|consists of a single
edge, and adjoining a triangle to a subdigon adds two edges, adjoining a quadrilateral
adds three edges, and so on, therefore:

E=E m = 1 + 2 m 2 + 3 m 3 + 4 m 4 +...= 1 +
∑
k≥ 2
kmk. (5)
The Euler polytope formulaV−E+F=1 (for polygons, we don’t count the sur-
rounding region as a face) then yields the number of vertices as:

V=V m = 2 +m 2 + 2 m 3 + 3 m 4 +...= 2 +
∑
k≥ 2
(k− 1 )mk. (6)
As a type contains only a finite number of nonzeromk, we knowV,E, andFare
always finite natural numbers.

For a given type m , we letS m denote the finite multiset of subdigons of type m.
Then we can introduce the unbounded subdigon multiset S, layered by type:
S≡
∑
m ≥ 0
S m.
Letψbe the function which maps a subdigonsof type m =[m 2 ,m 3 ,m 4 ,...] to its
accounting monomial

ψ(s)≡t 2 m^2 t 3 m^3 tm 44 ··· ≡ tm
where as before the null subdigon hasψ(|)=1.
ForM, a multiset of subdigons, let(M)be the polynomial which is the sum of
ψ(s)for each elementsofM:

(M)≡
∑
s∈M
ψ(s).
Applyingto the unbounded multisetS, we get the generating series for the hyper-
Catalan numbers, an unbounded polynomial, or power series, in the variablest 2 ,t 3 ,
t 4 ,...which we call the subdigon polyseries and denote:

S = S [t 2 ,t 3 ,...]≡(S)=
∑
s∈S
ψ(s)=
∑
m ≥ 0
C mtm.
We claim that these two objectsSand S give us a vast extension of the Catalan story,
and yield a simple but powerful way of solving general polynomial equations, inde-
pendent of any explicit counting formulas forC m.

May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 389

6. SOLVING GENERAL POLYNOMIAL EQUATIONS SOFTLY. The subdigon

multisetSsupports a family ofk -ary panelling operators ∇kfork= 2 , 3 , 4 ,...that
extend the operation∇that we considered in the quadratic case. These allow us to

express an essentially geometric identity forS, giving then a corresponding algebraic
identity for S as a solution of the general geometric polynomial equation.
For subdigonss 1 ands 2 ,∇ 2 (s 1 ,s 2 )consists of a central roofed triangle to which
are adjoineds 1 by its roof along the first (left) side, ands 2 by its roof along the sec-
ond (right) side. Analogously,∇ 3 (s 1 ,s 2 ,s 3 )consists of a central roofed quadrilateral,
to which is adjoineds 1 to its first side,s 2 to its second side ands 3 to its third side,
each adjoined along its roof. Here we again number the non-roof sides of the central
quadrilateral counterclockwise from its roof. In general,∇k(s 1 ,s 2 ,...,sk)consists of a
central roofed(k+ 1 )-gon, with attached subdigonss 1 ,s 2 ,...,sk, each adjoined along
its sides in a sequential order from the roof in a counterclockwise fashion.
Figure 4 illustrates the panelling operator∇ 4 applied to four subdigons.

Figure 4. The operator∇ 4 creates a subdigon with a central pentagon.
In general, since∇kadds a(k+ 1 )-gon we have the identity:
ψ(∇k(s 1 ,s 2 ,...,sk))=tkψ(s 1 )ψ(s 2 )···ψ(sk).
What makes this work is that multiplication of theψ(si)is essentially addition of the
type vectors of thesi, and thetkfactor is another vector addition, adding one to the
k-th component. When we naturally extend∇kto multisets of subdigons,

∇k(M 1 ,M 2 ,...,Mk)≡
[
∇k(s 1 ,s 2 ,...,sk): s 1 ∈M 1 ,s 2 ∈M 2 ,...,sk∈Mk
]
per linearity we get the identity:

(∇k(M 1 ,M 2 ,...,Mk))=tk(M 1 )(M 2 )···(Mk).
Every subdigonsis either the null subdigon or it has a central roofed(k+ 1 )-gon for
some naturalk≥2. In the latter case it is necessarily of the form

s=∇k(s 1 ,s 2 ,...,sk)
for unique subdigonss 1 ,s 2 ,...,sk. It follows that we get the multiset equation

S=
[
|
]
+∇ 2 (S,S)+∇ 3 (S,S,S)+∇ 4 (S,S,S,S)+... (7)
which Graham et al. [ 54 ] address in Bonus Problem 7.50. Their result differs from
ours, as they count the subdivisions of a polygon as a power of a single variablez.
We obtain an algebraic version of equation ( 7 ) by applyingto both sides:

(S)=ψ(|)+(∇ 2 (S,S))+(∇ 3 (S,S,S))+(∇ 4 (S,S,S,S))+...
390 ©c THE MATHEMATICAL ASSOCIATION OF AMERICA [Monthly 132

giving an equation in S =(S)that’s quite general: thetk,k≥2 become the coeffi-
cients of a power series equation

S = 1 +t 2 S^2 +t 3 S^3 +t 4 S^4 +...
whose constant is 1 and whose linear coefficient is−1. We conclude:

Theorem 3 (The soft geometric polynomial formula). The polynomial or power
series equation

0 = 1 −α+t 2 α^2 +t 3 α^3 +t 4 α^4 +...
has a formal power series solution:

α= S = S [t 2 ,t 3 ,t 4 ,...]=
∑
m 2 ,m 3 ,m 4 ,...≥ 0
C[m 2 ,m 3 ,m 4 ,...]t
m 2
2 t
m 3
3 t
m 4
4 ··· =
∑
m ≥ 0
C mtm
where the hyper-Catalan numberC m =C[m 2 ,m 3 ,m 4 ,...] counts the number of sub-
digons withm 2 triangles,m 3 quadrilaterals,m 4 pentagons, etc.

We can now, with the same change of variable that we used in the quadratic case,
give a series solution to the general polynomial or polyseries equation. Please note
again that the coefficient of the linear term has a minus sign.

Theorem 4 (The soft polynomial formula). The polynomial or power series equation

0 =c 0 −c 1 x+c 2 x^2 +c 3 x^3 +c 4 x^4 +...
has a formal series solution:

x=
c 0
c 1
S [
c 0 c 2
c^21
,
c 02 c 3
c^31
,
c^30 c 4
c 14
, ...]
=
∑
m 2 ,m 3 ,m 4 ,...≥ 0
C[m 2 ,m 3 ,m 4 ,...]
c^10 +m^2 +^2 m^3 +^3 m^4 +...
c
1 + 2 m 2 + 3 m 3 + 4 m 4 +...
1
cm 22 c 3 m^3 cm 44 ···.
Proof. Settingx=

c 0
c 1
αthe equation to solve becomes
c 0
(
1 −α+
c 0 c 2
c^21
α^2 +
c 02 c 3
c^31
α^3 +
c 03 c 4
c^41
α^4 +...
)
= 0.
We apply Theorem 3 withtk=

ck 0 −^1 ck
c 1 k
fork= 2 , 3 ,...to solve forαand then write
downx.

If we introduce the notation cm ≡cm 22 cm 33 cm 44 ···, which does not involvec 0 orc 1 ,
and use our previous expressions for the number of vertices and edges in a subdigon
of type m , then we can further abbreviate the soft general polynomial zero as:

x=
∑
m ≥ 0
C m
cV 0 m −^1
cE 1 m
cm. (8)
This simple looking formula effectively solves the most important problem in algebra.
It hides a huge amount of structure and complexity, massively extending the Catalan
story.

May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 391

7. FORMULAS FOR THE HYPER-CATALAN NUMBERS. To make our soft
formulas explicit we want to write down concrete formulas for the hyper-Catalan array.
Alison Schuetz and Gwyn Whieldon, 2016 [ 51 ] gave us the formula we sought in terms
of subdivided polygons as their Lemma 3.2. They cite Brendon Rhoades, 2011 [ 52 ]
and both papers cite Kreweras, 1972 [ 39 , 40 ] as the source of the formula. We’ve since
found earlier results from Erd ́elyi and Etherington, 1940 [ 2 ], Raney, 1960 [ 34 ] and
Tutte, 1964 [ 35 ].

Theorem 5 (Erdelyi and Etherington, Raney, Tutte, Kreweras, Rhoades, Schuetz ́
and Whieldon). The number of subdigons of type m =[m 2 ,m 3 ,m 4 ,...]is

C m =
( 2 m 2 + 3 m 3 + 4 m 4 +...)!
( 1 +m 2 + 2 m 3 + 3 m 4 +...)!m 2 !m 3 !m 4 !···
.
Equivalently, we can write this explicitly as a sub-multinomial coefficient:
C m =
1
1 + 2 m 2 + 3 m 3 +...
(
1 + 2 m 2 + 3 m 3 +...
1 +m 2 + 2 m 3 +..., m 2 ,m 3 ,m 4 , ...
)
which a priori is not necessarily a natural number. There is some magic here, just as
with the Catalan numbers, giving us integers because we are counting something.
Using the notation m !≡m 2 !m 3 !m 4 !···and equations ( 5 ) and ( 6 ), we may further
rewrite this formula involving the Euler polygonal relation as:

C m =
(E m − 1 )!
(V m − 1 )! m!
. (9)
Note that the sum of themiisF m , the number of faces of a subdigon of type m
(equation ( 4 )), corresponding to the m! factor. When combined with equation ( 8 )we
can rewrite the soft formulas of Theorems 3 and 4 with an explicit coefficient:

Theorem 6 (The geometric polynomial formula). The equation

0 = 1 −α+t 2 α^2 +t 3 α^3 +t 4 α^4 +t 5 α^5 +...
has a formal power series solution:

α=
∑
mk≥ 0
( 2 m 2 + 3 m 3 + 4 m 4 +···)!
( 1 +m 2 + 2 m 3 +...)!m 2 !m 3 !···
t 2 m^2 t
m 3
3 ···=
∑
m ≥ 0
(E m − 1 )!
(V m − 1 )! m!
tm.
Theorem 7 (The polynomial formula). The polynomial or power series equation

0 =c 0 −c 1 α+c 2 α^2 +c 3 α^3 +c 4 α^4 +...
has a formal series solution:

α=
∑
m 2 ,m 3 ,...≥ 0
( 2 m 2 + 3 m 3 + 4 m 4 +...)!
( 1 +m 2 + 2 m 3 + 3 m 4 +...)!m 2 !m 3 !···
c
1 +m 2 + 2 m 3 +...
0 c
m 2
2 c
m 3
3 ···
c^11 +^2 m^2 +^3 m^3 +^4 m^4 +...
=
∑
m ≥ 0
cV 0 m −^1
(V m − 1 )!
(
cE 1 m
(E m − 1 )!
)− 1
cm
m!
.
392 ©c THE MATHEMATICAL ASSOCIATION OF AMERICA [Monthly 132

Euler would probably like this formula, which combines a great extension of his
polygon subdivision work with his polytope formulaV−E+F=1 appearing here
quite noticeably once we observe the degree of cm is the number of facesF. As the
original equation is homogeneous in theci, the total degree of each term in the vari-
ablesc 0 ,c 1 ,c 2 ,...is 0.
The forms spur us to define, for a natural numbern, the factorial power quotient

xn≡
xn
n!
which we use to rewrite our two main results more succinctly, giving insight into the
structure and relation of our series zeros.

Theorem 8 (The geometric polynomial formula, factorial power quotient form).

The equation 0= 1 −α+

∑
k≥ 2
tkαkhas a series solution:
α= S [t 2 ,t 3 ,...]=
∑
mk≥ 0
11 +m^2 +^2 m^3 +...( 12 m^2 +^3 m^3 +...)−^1 t 2 m^2 t 3 m^3 ···
=
∑
m ≥ 0
1 V m −^1 ( 1 E m −^1 )−^1 tm , where tm ≡
tm
m!
=t 2 m^2 t 3 m^3 ···.
Theorem 9 (The polynomial formula, factorial power quotient form). The equa-

tion 0=c 0 −c 1 x+

∑
k≥ 2
ckxkhas a series solution:
x= c 1 −^1
∑
mk≥ 0
c 01 +m^2 +^2 m^3 +...
(
c 12 m^2 +^3 m^3 +...
)− 1
c 2 m^2 c 3 m^3 ···
=c− 11
∑
m ≥ 0
c 0 V m −^1
(
c 1 E m −^1
)− 1
cm , where cm ≡
cm
m!
=c 2 m^2 c 3 m^3 ···.
8. THE BI-TRI ARRAY AND A ONE LINE CUBIC APPROXIMATION. Let’s
give an algebraic alternative to the Tartaglia / Cardano solution of the cubic, and
use it to straightforwardly compute approximate numerical solutions. Specializing the
geometric polynomial formula (Theorem 6 ):

Theorem 10 (The geometric cubic formula). The equation

1 −α+t 2 α^2 +t 3 α^3 = 0
has a formal power series solution:

α=
∑
m 2 ,m 3 ≥ 0
C[m 2 ,m 3 ]t 2 m^2 t 3 m^3 =
∑
m 2 ≥ 0
∑
m 3 ≥ 0
( 2 m 2 + 3 m 3 )!
( 1 +m 2 + 2 m 3 )!m 2 !m 3!
t 2 m^2 t 3 m^3.
We’ll callC[m 2 ,m 3 ] the Bi-Tri array , as it counts not only subdigons withm 2
triangles andm 3 quadrilaterals (and no other kinds of faces), but also the number of
full plane trees with exactlym 2 binary nodes andm 3 ternary nodes (and no other arities
except leaf nodes).

May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 393

Here is an initial part of the array, also described as A104978 in OEIS, where it
is recognized as having a generating function satisfying a general geometric cubic
equation.

m 2
m 3 The Bi-Tri arrayC[m 2 ,m 3 ]=( 1 +m( 22 +m 22 m+^33 )m!^3 m)! 2 !m 3!
01 2 3 4 5
0 11312 55 273
1 1 5 28 165 1001 6188
2 2 21 180 1430 10920 81396
3 5 84 990 10010 92820 813960
4 14 330 5005 61880 678300 6864396
5 42 1287 24024 352716 4476780 51482970
6 132 5005 111384 1899240 27457584 354323970
7 429 19448 503880 9806280 159352050 2283421140
The first column,C[m 2 ,0], contains of course the Catalan numbers. The first row,
C[0,m 3 ], contains the quadrilateral Fuss numbers, A001764, which count the number
of subdigons with exactlym 3 quadrilateral faces.
A surprising property is that the alternating sum of cross diagonals, with the excep-
tion of the first, is always 0. That is, 0= 1 − 1 = 2 − 5 + 3 = 5 − 21 + 28 −12 and
so on. This relates to the Geode factorization in Section 11.
Let’s see how we can use even just a modest part of this array to get numerical
solutions to the famous cubic equation

f(x)=x^3 − 2 x− 5 = 0
used by Wallis to illustrate Newton’s method [ 58 ]. This will also be an opportunity
to introduce the idea of bootstrapping. We begin by taking just the first few cross
diagonals of the array, terms up to degree 3:

Q(t 2 ,t 3 )= 1 +(t 2 +t 3 )+( 2 t 22 + 5 t 2 t 3 + 3 t 32 )+( 5 t 23 + 21 t 22 t 3 + 28 t 2 t^23 + 12 t 33 ). (10)
To solve a general cubicc 0 −c 1 x+c 2 x^2 +c 3 x^3 =0, the soft polynomial formula
(Theorem 4 ) tells us that we should also define:

K(c 0 ,c 1 ,c 2 ,c 3 )≡
c 0
c 1
Q
(
c 0 c 2
c^21
,
c^20 c 3
c^31
)
. (11)
We calculateK(− 5 , 2 , 0 , 1 )≈− 999 .082031, clearly a fail. But we cannot expect a
single formula to automatically generate accurate numerical zeros; after all, most such
algorithms, such as Newton-Raphson, are sensitive to their starting guess.
For Wallis’s equation,x=2 is a reasonable first approximation, so we look at
g(x)=f(x+ 2 )=− 1 + 10 x+ 6 x^2 +x^3 and calculate K(− 1 ,− 10 , 6 , 1 )=
0 .0945345708 which gives an approximate zero 2.0945345708.
In comparison, our computer determines two (necessarily approximate) complex
zeros and one approximate rational one,x≈ 2 .0945514815423265915 to 19 decimal
places. So we have agreement up to 4 decimal places.
To increase the accuracy, we use bootstrapping: just input the obtained value as a
new initial guess. For illustration, we truncate the guess to four decimal places. So we
calculate

f(x+ 2. 0945 )=− 0. 000574591374999045 + 11. 16079075 x+ 6. 2835 x^2 +x^3
394 ©c THE MATHEMATICAL ASSOCIATION OF AMERICA [Monthly 132

and adding 2.0945 toKapplied to these coefficients gives 2.0945514815423265098,
agreeing with our computer to 16 decimal places.
Of course this has been a pretty modest example, but it shows that, even just us-
ing a small portion of the full subdigon polyseries, we can obtain impressive results.
And now we have a one line cubic approximation formula, namely equation ( 10 ), our
expression forQ(t 2 ,t 3 )above!

9. EISENSTEIN’S EXAMPLE. An immediate corollary to Theorem 7 is the alge-
braic solution to the general quintic equation: it has one once we let go of radicals.

Theorem 11 (The quintic formula). The quintic equation

c 0 −c 1 x+c 2 x^2 +c 3 x^3 +c 4 x^4 +c 5 x^5 = 0
has a formal series solution:

x=
∑
m 2 ,m 3 ,
m 4 ,m 5 ≥ 0
( 2 m 2 + 3 m 3 + 4 m 4 + 5 m 5 )!c^10 +m^2 +^2 m^3 +^3 m^4 +^4 m^5 cm 22 cm 33 cm 44 c 5 m^5
( 1 +m 2 + 2 m 3 + 3 m 4 + 4 m 5 )!m 2 !m 3 !m 4 !m 5 !c
1 + 2 m 2 + 3 m 3 + 4 m 4 + 5 m 5
1
.
This also contains a solution to the general quadratic, cubic, and quartic equations.

Eisenstein [ 4 , 5 ] determined a power series for the Bring radical oft, solving−t+
x+x^5 =0. That’sc 0 =−t,c 1 =− 1 ,c 2 = 0 ,c 3 = 0 ,c 4 = 0 ,c 5 =1 in Theorem 11.
The zero values forc 2 ,c 3 ,andc 4 mean that we’re only summing overm 5 =mso we
have:

x=
∑
m≥ 0
( 5 m)!(− 1 )mt^4 m+^1
( 4 m+ 1 )!m!
=t−t^5 +
10
2!
t^9 −
15 · 14
3!
t^13 +
20 · 19 · 18
4!
t^17 −...
which is indeed Eisenstein’s series solution.
Theorem 7 lets us just as easily solve the more general−t+x+xd=0:

x=
∑
m≥ 0
(dm)!(− 1 )mt(d−^1 )m+^1
((d− 1 )m+ 1 )!m!
which essentially agrees with Theorem 2.3 of Schuetz and Whieldon [ 51 ]; the coeffi-
cients are the two-parameter Fuss numbers [ 50 ].

10. REVERSION OF SERIES AND LAGRANGE. Although we have been un-
able to find any reference for an explicit series zero of the general polynomial with
a closed-form hyper-Catalan coefficient, we’ve found formulas for the coefficients of
series reversions that are similar to our polynomial zero result as early as McMahon,
1894 [ 15 , 22 , 23 , 51 ].
Suppose we have an ongoing polyseriesy=p(x)=x−a 2 x^2 −a 3 x^3 −a 4 x^4 −...
and we want to revert the series, that is, expressxas a power series iny,sayx=
q(y)=y+b 2 y^2 +b 3 y^3 +b 4 y^4 +....
When we computep(q(y))the result is a power series inythat has coeffi-
cients which are finite sums of terms involving theaiandbjvariables, starting with

p(q(y))=y+y^2 (b 2 −a 2 )+y^3 (b 3 −a 3 − 2 a 2 b 2 )+y^4 (b 4 − 3 a 3 b 2 −a 4 −a 2 b^22
− 2 a 2 b 3 )+y^5 (b 5 −a 5 − 3 a 3 b^22 − 2 a 2 b 4 − 3 a 3 b 3 − 4 a 4 b 2 − 2 a 2 b 2 b 3 )+....
May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 395

Setting this toy, we sequentially find thatb 2 =a 2 ,b 3 = 2 a 22 +a 3 ,b 4 = 5 a 23 + 5 a 2 a 3 +
a 4 ,b 5 = 14 a 24 + 21 a^22 a 3 + 3 a 32 + 6 a 2 a 4 +a 5 and onwards. While the pattern is not
obvious, Lagrange found a general formula, which in this case takes the form

bn=
1
n!
lim
y→ 0
dn−^1
dyn−^1
(
y
p(y)
)n
.
So for example to findb 3 , we expand

(
y
p(y)
) 3
=
(
1
1 −a 2 y−a 3 y^2 +...
) 3
= 1 + 3 a 2 y+
(
6 a^22 + 3 a 3
)
y^2 +···
up to the powery^2 , and then take^13 times that coefficient, givingb 3 = 2 a 22 +a 3.
This series reversion is highly relevant to our problem, since if we sety=1 then the
original equation reduces to 1=x−a 2 x^2 −a 3 x^3 −a 4 x^4 +..., exactly our geometric
polynomial equation, and the inversion givesx= 1 +b 2 +b 3 +b 4 +..., which can
be seen to be our solution S. In fact we will see exactly this particular presentation of
our solution in the next section, when we discuss vertex layerings of S (and in Mott,
1855 [ 20 ], etc.).
Proofs of Lagrange’s formula were given by Lagrange himself in 1770 [ 13 ], by
Pierre-Simon Laplace and by Charles Hermite using contour integration in 1865. Since
then many people have given alternate or more explicit versions of Lagrange’s for-
mula [ 14 ]. Riordan’s 1968 version [ 15 ] of McMahon’s [ 22 ] formulation of Lagrange
Inversion is, using our notation:

bn=
∑
m 2 +m 3 +m 4 +...=k
m 2 + 2 m 3 + 3 m 4 +...=n
1
n+ 1
(
n+k
k
)
k!
m 2 !m 3 !···mn+ 1!
a 2 m^2 a 3 m^3 ···a
mn+ 1
n+ 1
where the sum is over natural numbersm 2 ,m 3 ,...≥0. This solution for a series
reversion appears very similar to our solution for the series zero. Indeed, if we note
thatn=V m −2,n+k=E m −1, andk=F m (equations ( 6 ), ( 5 ), and ( 4 )), then we
get

1
n+ 1
(n+k)!
n!k!
k!
m!
=
(n+k)!
(n+ 1 )! m!
=
(E m − 1 )!
(V m − 1 )! m!
=C m.
Collectively the two derivations above, namely the soft geometric polynomial
formula Theorem 3 , and the derivation based on Lagrange Inversion, together give
us the explicit closed form of the hyper-Catalan numbers. There is some irony that
Lagrange unknowingly found a passage to the secret of solving polynomial equations
with his reversion of series formula, but this connection would lay hidden for centuries
more.

11. LAYERING, FACE FACTORIZATION, AND THE GEODE. The subdigon

polyseries S = S [t 2 ,t 3 ,t 4 ,...]≡(S)is the key algebraic object in the theory, so it’s
worthwhile to try to come to better grips with it. We do this by judicious layerings, and
as we do so another surprising and even more mysterious algebraic object emerges: the
Geode.

396 ©c THE MATHEMATICAL ASSOCIATION OF AMERICA [Monthly 132

Vertex layering of S. To organize S according to the number of verticesV= 2 +
m 2 + 2 m 3 + 3 m 4 +...(equation ( 6 )), we introduce the auxiliary variablevand define
S V≡v^2 S

[
vt 2 ,v^2 t 3 ,v^3 t 4 ,...
]
. Settingv=1 recovers S , but by expanding in powers
ofvwe obtain a layering into (finite) polynomials which count subdigons with a given
number of vertices:

S V=v^2 +t 2 v^3 +
(
2 t 22 +t 3
)
v^4 +
(
5 t 23 + 5 t 2 t 3 +t 4
)
v^5
+
(
14 t 24 + 21 t 22 t 3 + 3 t 32 + 6 t 2 t 4 +t 5
)
v^6 +···.
Note that the coefficients here are the same as the quantities 1,b 2 ,b 3 ,...which ap-
peared in the reversion of series in the previous section. Figure 5 shows subdigons that
are hexagons, corresponding to thev^6 term.

Figure 5. 45 subdigons with six vertices, [v^6 ] S V= 14 t 24 + 21 t 22 t 3 + 3 t 32 + 6 t 2 t 4 +t 5.
Setting alltk=1in S V givesv^2 +v^3 + 3 v^4 + 11 v^5 + 45 v^6 + 197 v^7 + 903 v^8 +
4278 v^9 +···whose coefficient sequence is A001003, the little Schroeder numbers.
We thank an anonymous referee for pointing out that settingti=tin S V gives
A033282 and the resulting connection to associahedra. We note that A033282, “the
number of diagonal dissections of a convexn-gon intok+1 regions,” is the Cayley
array, rediscovered by Kreweras, which we discussed in Section 2.

Edge layering of S. To organize S according to the number of edgesE= 1 +
2 m 2 + 3 m 3 + 4 m 4 +...(equation ( 5 )), we introduce the auxiliary variableeand
set: S E≡e S

[
e^2 t 2 ,e^3 t 3 ,e^4 t 4 ,...
]
. Expanding, we then get a layering of S into
(finite) polynomials which account for subdigons with a given number of edges:

S E=e+t 2 e^3 +t 3 e^4 +
(
2 t 22 +t 4
)
e^5 +( 5 t 2 t 3 +t 5 )e^6
+
(
5 t 23 + 3 t 32 + 6 t 2 t 4 +t 6
)
e^7 +
(
21 t 22 t 3 + 7 t 3 t 4 + 7 t 2 t 5 +t 7
)
e^8 +···.
Figure 6 shows the subdigons with exactly 7 edges, corresponding to thee^7 term. Set-
tingtk=1, we get the seriese+ 0 e^2 +e^3 +e^4 + 3 e^5 + 6 e^6 + 15 e^7 + 36 e^8 + 91 e^9 +
···whose coefficient sequence is A005043, the Riordan numbers.

Figure 6. 15 subdigons with seven edges, [e^7 ] S E= 5 t 23 + 3 t 32 + 6 t 2 t 4 +t 6.
May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 397

Face layering of S and the Geode factorization. To organize S according to the
number of facesF=m 2 +m 3 +m 4 +..., we introduce the auxiliary variablefand
set S F≡ S [ft 2 ,ft 3 ,ft 4 ,...]. Expanding, we get a layering of S into (unbounded)
polyseries of a given total degree, accounting for subdigons with a given number of
faces:

S F= 1 +(t 2 +t 3 +t 4 +...)f
+
(
2 t 22 + 5 t 2 t 3 + 3 t 32 + 6 t 2 t 4 + 7 t 3 t 4 + 4 t 42 +···
)
f^2
+
(
5 t 23 + 21 t 22 t 3 + 28 t 2 t 32 + 12 t 33 + 28 t 22 t 4 + 72 t 2 t 3 t 4
+ 45 t 2 t 42 + 45 t 32 t 4 + 55 t 3 t 42 + 22 t 43 +···
)
f^3
+
⎛
⎝
14 t 24 + 84 t 23 t 3 + 180 t 22 t 32 + 165 t 2 t 33 + 55 t 34 + 120 t 23 t 4
+ 495 t 22 t 3 t 4 + 660 t 2 t 32 t 4 + 286 t 33 t 4 + 330 t 22 t 42 + 858 t 2 t 3 t 42
+ 546 t 32 t 42 + 364 t 2 t 43 + 455 t 3 t 43 + 140 t 44 +···
⎞
⎠f^4 +···.
Defining S 1 ≡t 2 +t 3 +t 4 +...we notice what appears to be a remarkable factoriza-
tion:

S F= 1 + S 1 f+ S 1 ( 2 t 2 + 3 t 3 + 4 t 4 +...)f^2
+ S 1
(
5 t 22 + 16 t 2 t 3 + 12 t 32 + 23 t 2 t 4 + 33 t 3 t 4 + 22 t 42 +···
)
f^3
+ S 1
(
14 t 23 + 70 t 22 t 3 + 110 t 2 t 32 + 55 t 33 + 106 t 22 t 4 + 319 t 2 t 3 t 4
+ 224 t 2 t 42 + 231 t 32 t 4 + 315 t 3 t 42 + 140 t 43 +···
)
f^4 +···.
Theorem 12 (Subdigon polyseries factorization). There is a unique polyseries G for
which we have the identity S − 1 = S 1 G.

We note that S 1 is not a power series beginning with a nonzero constant, hence is
not automatically invertible, so this is a nontrivial statement.

Proof. LetSnbe the multiset of subdigons withnfaces. We haveS 0 =[|], the
singleton with the null subdigon, and S 0 =(S 0 )=1. The rest,Sn,n≥1, are nec-
essarily formed by applying∇ktok-tuples of multisets of smaller subdigons,

Sn=
∑
k≥ 2
∑
1 +∑ki= 1 ji=n
∇k(Sj 1 ,Sj 2 ,...,Sjk)
where 0≤ji<n, strictly less as∇kadds one face. The term for eachkwhere all theji

are zero,∇k(S 0 ,S 0 ,...), gives a singleton with the unsubdivided(k+ 1 )-gon, exactly
one face. Collectively those subdigons formS 1 ,so S 1 =(S 1 )=t 2 +t 3 +t 4 +...,
agreeing with the definition above. ForS 2 ,tomake1+
∑k
i= 1 ji=2, one of theji=^1
and the rest are zero, soS 1 appears once andS 0 appearsk−1 times. Applyingto a
term ofS 2 gives:
(∇k(Sj 1 ,Sj 2 ,...,Sjk))=tk(Sj 1 )···(Sjk)=tk(S 1 )((S 0 ))k−^1 =tk S 1.
We see that each term of S 2 =(S 2 )is a multiple of S 1 ; we conclude that S 1 is a
factor of S 2. Similarly, each term of S nforn≥3 has at least one nonzeroji, so each
term has at least one of S 1 , S 2 , ... S n− 1 as a factor, so S 1 as a factor. Forn≥1we
conclude S nhas S 1 as a factor, so S 1 divides S − 1 =

∑
n≥ 1 S n.
398 ©c THE MATHEMATICAL ASSOCIATION OF AMERICA [Monthly 132

As an application, here is a simplification of equation ( 10 ), our one line approximate
cubic formula:

Q(t 2 ,t 3 )= 1 +(t 2 +t 3 )
(
1 + 2 t 2 + 3 t 3 + 5 t 22 + 16 t 2 t 3 + 12 t^23
)
. (12)
The factorization suggests to us that the factor G , which we call the Geode , encodes
structure underlying the hyper-Catalan numbers which is perhaps even more funda-
mental. Here are a few of the initial terms of G :

G = 1 + 2 t 2 + 3 t 3 + 4 t 4 +...+ 5 t 22 + 16 t 2 t 3 + 12 t 32 + 23 t 2 t 4 + 33 t 3 t 4 + 22 t 42
+ 14 t 23 + 70 t 22 t 3 + 110 t 2 t 32 + 55 t 33 + 106 t 22 t 4 + 319 t 2 t 3 t 4 + 224 t 2 t^24 +···.
The coefficients form the Geode array :G m =G[m 2 ,m 3 ,...]. Even in the cubic
case we see something new; the first two dimensional slice, the Geode Bi-Tri array :

m 2
m 3 The Geode Bi-Tri arrayG[m 2 ,m 3 ]
01 2 3 4 5
0 1 3 12 55 273 1428
1 2 16 110 728 4760 31008
2 5 70 702 6160 50388 395010
3 14 288 3850 42432 418950 3853696
4 42 1155 19448 259350 3010700 31870410
5 132 4576 93366 1466080 19612560 235282320
6 429 18018 433160 7845024 119041650 1598394798
7 1430 70720 1961256 40310400 685026342 10189625600
The first column is the shifted Catalan numbers, and the first row is the shifted
quadrilateral Fuss numbers, A001764. We didn’t find other rows, columns, or the dove-
tailed array in the OEIS. We conjecture the following form for its entries:

G[m 2 ,m 3 ]
?
=
1
( 2 m 2 + 2 m 3 + 3 )(m 2 +m 3 + 1 )
( 2 m 2 + 3 m 3 + 3 )!
(m 2 + 2 m 3 + 2 )!m 2 !m 3!
and further conjecture that these numbers are counting ordered incomplete trees with
m 2 binary nodes,m 3 ternary nodes, and a single additional leaf node. We conjecture
that the natural generalization of this explains all the entries of the Geode arrayG m.
We note that our above conjectured formula for the Geode Bi-Tri array does not
extend in an obvious way more generally, on account of large prime factors appearing
early in the array, e.g.,G[1, 0 ,1]= 23 ,G[2, 0 ,2]=1549, andG[3, 0 ,3]=145687.

With 2kparameters, we conjecture G [−f, f,... ,−f, f]
?
=
∑
nk
nfn.
Withk−2 leading zeros, we conjecture thatG[0,..., 0 ,mk] is a two-parameter
Fuss number [ 50 ], and that our proposed formula for the Geode Bi-Tri entries gener-

alizes naturally to entries of the formG[0,..., 0 ,mk,mk+ 1 ]
?
=

(kmk+(k+ 1 )(mk+ 1 + 1 ))!
(k(mk+mk+ 1 + 1 )+ 1 )(mk+mk+ 1 + 1 )((k− 1 )mk+k(mk+ 1 + 1 ))!mk!mk+ 1!
.
Obtaining an explicit formula for the general entry appears to be a major challenge.
May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 399

12. FURTHER DIRECTIONS. The hyper-Catalan numbers form a vast edifice
which naturally extends the ubiquitous Catalan sequence, so they are worth serious
exploration. This suggests a broad enlargement of the OEIS to incorporate arbitrary
sequences found within the hyper-Catalan array, as we’ve already seen, or for example,
by fixing all but one of the variables inC[m 2 ,m 3 ,m 4 ,...].
We’ve found thatC[n] is A000108,C[0,n] is A001764,C[0, 0 ,n] is A002293,
C[0, 0 , 0 ,n] is A002294,C[n,1] is A002054,C[1,n−1] is A025174,C[n− 3 ,2] is
A074922,C[1, 0 ,n] is A257633,C[0, 1 ,n] is A224274,C[n, 0 ,1] is A002694, and
C[0, 0 , 1 ,n] is A163456. Likely, there are many more. We might have to enlist the
help of some AI friends here!
An obvious question for investigation is: What besides subdigons do hyper-Catalan
numbersC m count, and can we give direct bijective correspondences between these
different incarnations? Schuetz and Whieldon [ 51 ] and Rhoades [ 52 ] have found inter-
esting other such structures, but there are likely many more. How does the surprising
connection with Euler’s polytope formula manifest itself in these other situations?
Our subdigon polyseries factorization theorem (Theorem 12 ) shows that the Geode
arrayG m directly encodes the hyper-Catalan array, hence it is now also an object
of considerable interest. Can we establish our conjectures for its entries, and investi-
gate the significance of the kinds of ordered incomplete trees that are possibly being
counted here? What is the combinatorial significance of these curious objects in other
Catalan-type situations? Further, the suggestion we made above for incorporating the
hyper-Catalan array systematically into the OEIS also applies to the Geode array.
As for solving polynomial equations, we have given one solution, but are there oth-
ers, and what do they look like? How does Galois theory connect with this power series
approach? What about more traditional extension fields: how are they involved, and in
particular how do we generate complex solutions? (We have observed that bootstrap-
ping works to approximate complex solutions.)
On the applied side, we can ask about the utility of the solution for numerical ap-
proximation. In particular, the conditions for convergence and optimization of boot-
strapping could be further studied.
Finally, in other areas of pure mathematics, formal power series give algebraic and
combinatorially explicit alternatives to functions which cannot actually be concretely
evaluated (such as n th root functions). Hence they ought to assume a more central
position. This is a solid, logical way of removing many of the infinities which currently
abound in our mathematical landscape.
The combinatorial and computational orientation is full of power, and we ought
to harness it more fully, opening up new landscapes with the aid of our symbolic
computation machines.

ACKNOWLEDGMENTS. The authors would like to warmly thank the two anonymous referees and the
editor for their kind and insightful comments that have greatly improved this paper. We also thank Dr. Sateesh
Mane for catching a misprint and for his helpful communication.

DISCLOSURE STATEMENT. No potential conflict of interest was reported by the authors.

ORCID
N. J. Wildberger http://orcid.org/0000-0003-3503-
Dean Rubine http://orcid.org/0009-0000-8767-

REFERENCES

[1] Stillwell J. Mathematics and its history. Undergraduate texts in mathematics. New York: Springer; 2004.
[2] Erdelyi A, Etherington IMH. Some problems of non-associative combinations (2). Edinburgh Math ́
Notes. 1940;32:vii–xii.
400 ©c THE MATHEMATICAL ASSOCIATION OF AMERICA [Monthly 132

[3] Etherington IMH. Some problems of non-associative combinations (I). Edinburgh Math Notes.
1940;32:i–vi.
[4] Stillwell J. Eisenstein’s footnote. Math Intell. 1995;17(2):58–62.
[5] Patterson SJ. Eisenstein and the quintic equation. Hist Math. 1990;17:132–140.
[6] OEIS Foundation Inc. The on-line encyclopedia of integer sequences. Available from:http://oeis.org;
2023.
[7] Newton I. Commercium epistolicum d. Johannis Collins et aliorium de analysi promota [Letter from
John Collins and others promoted the analysis]. London: Iussu Societatis Regoae, typis Paeersoniani.
1712.
[8] Ferraro G. The rise and development of the theory of series up to the early 1820s. New York: Springer;
2008.
[9] Wildberger NJ. Solving polynomial equations. YouTube; 2021. Playlist from the WildEggMaths
channel, retrieved July 1, 2023. Available from:https://www.youtube.com/watch?v=XHC1YLh67Z0&
list=PLzdiPTrEWyz7PpsRFHuGb3EhwZtEOdRjV&index=41.
[10] Hardy DW, Walker CL. Doing mathematics with Scientific WorkPlace. Vol. 1. TCI Software Research;
1995.
[11] Wolfram Research, Inc. Mathematica, version 13.3; 2023. Champaign (IL).
[12] Meurer A, Smith CP, Paprocki M, Certık O, Kirpichev SB, Rocklin M, et al. SymPy: symbolic comput-
ing in Python. PeerJ Comput Sci. 2017;3:e103.
[13] Lagrange JL. Nouvelle methode pour r ́ esoudre les ́ ́equations litt ́erales par le moyen des s ́eries [New
method for solving literal equations using series]. Histoire de l’Acad ́emie Royale des Sciences et Belles-
Lettres de Berlin; 1770.
[14] Gessel IM. Lagrange inversion. J Comb Ser A. 2016;144:212–249.
[15] Riordan J. Combinatorial identities. New York: Wiley; 1968.
[16] Pak I. History of Catalan numbers. Cambridge: Cambridge University Press; 2015. In Catalan numbers
[ 47 ] by Richard P. Stanley.
[17] Tamm U. Olinde Rodrigues and combinatorics. In: Mathematics and social utopias in France: Olinde
Rodrigues and his times. History of mathematics. Providence (RI): American Mathematical Society;
p. 119–130.
[18] Euler L. Letter to Goldbach, C. OO0868; 1751.
[19] Cayley A. On the partitions of a polygon. Proc London Math Soc. 1890;s1-22(1):237–264.
[20] Mott JB. Mathematical key. Detroit, printed for the author by Robert F. Johnstone, Office of the Michi-
gan Farmer; 1855.
[21] Mott JB. On the solution of equations. Analyst. 1882;9(4):104–106.
[22] McMahon J. On the general term in the reversion of series. Bull New York Math Soc. 1894;3(7):170–
[23] Van Orstrand CE. Xxxvii reversion of power series. Phil Mag Ser 6. 1910;19(111):366–376.
[24] Capelli A. Sulla risoluzione generale delle equazioni algebriche per mezzo di sviluppi in serie [On
the general resolution of algebraic equations by means of series expansions]. Rend circ matem napoli.
1907;26:192–199, 289–294, 342–347. Three notes.
[25] Capelli A. Determinazione del coefficiente generale nello sviluppo in serie della radice di un’equazione
algebrica [Determination of the general coefficient in the series expansion of the root of an algebraic
equation]. Rend circ matem palermo. 1908;26:363–368.
[26] Birkeland R. Resolution de l’etquation algebrique trinome par des fonctions hypergeom ́etriques
supe ́ıreures [Resolution of the trinomial algebraic equation by higher hypergeometric functions]. Cr
acad sci, paris - ser I math. 1920;171:1378.
[27] Belardinelli G. Sulla risoluzione delle equazioni algebriche mediante sviluppi in serie [On the resolu-
tion of algebraic equations by means of series expansions]. Ann matem pura applicata (1898-1922).
1921;29:251–270.
[28] Mellin HJ. Resolution de l’equation alg ́ ́ebrique gen ́ ́erale ́a l’aide de la fonction gamma [Solving the
general algebraic equation using the gamma function]. Cr acad sci, paris - ser i math. 1921;172:658–

[29] Mayr K.Uber die L ̈ osung algebraischer Gleichungssysteme durch hypergeometrische Funktionen [On ̈
the solution of algebraic systems of equations using hypergeometric functions]. Monatshefte F ̈ur Math-
ematik Und Physik. 1936;45(1):280–313.
[30] Belardinelli G. Fonctions hypergeom ́ etriques de plusieurs variables et r ́ ́esolution analytique des
equations alg ́ ́ebriques g ́en ́erales [Hypergeometric functions of several variables and analytical reso-
lution of general algebraic equations]. M ́emor sci math, fasc. 1960;145.
[31] Sands AD. On generalised Catalan numbers. Discrete Math. 1978;21(2):219–221.
[32] Chu W. A new combinatorial interpretation for generalized Catalan number. Discrete Math.
1987;65(1):91–94.
[33] Lettl G. Finding zeros of polynomials using power series. In: Selected topics in functional equations and
iteration theory, proceedings of the Austrian-Polish seminar, Graz, 1991. vol. 316; 1992. p. 227–230.

May 2025] A HYPER-CATALAN SERIES SOLUTION TO POLYNOMIAL EQUATIONS 401

[34] Raney GN. Functional composition patterns and power series reversion. Trans Amer Math Soc.
1960;94:441–451.
[35] Tutte WT. The number of planted plane trees with a given partition. Amer Math Monthly.
1964;71(3):272–277.
[36] Chorneyko IZ, Mohanty SG. On the enumeration of certain sets of planted plane trees. J Comb Ser B.
1975;18(3):209–221.
[37] Richards DS. On a theorem of Chorneyko and Mohanty. J Comb Ser A. 1979;27(3):392–393.
[38] Goulden IP, Jackson DM. Combinatorial enumeration. A Wiley-Interscience publication. Wiley; 1983.
Dover published a new edition in 2004.
[39] Kreweras G. Sur les partitions non croisees d’un cycle [On the non-crossing partitions of a cycle].
Discrete Math. 1972;1(4):333–350.
[40] Kreweras G, Earnshaw BA. On the non-crossing partitions of a cycle; 2005. English translation of
Kreweras [ 39 ]. Available from:https://users.math.msu.edu/users/earnshaw/research/kreweras.pdf.
[41] Simion R. Noncrossing partitions. Discrete Math. 2000;217(1):367–409.
[42] Stanley RP. Enumerative combinatorics. Cambridge: Cambridge University Press; 1999. (Cambridge
Studies in Advanced Mathematics; 2).
[43] Armstrong D. Generalized noncrossing partitions and combinatorics of Coxeter groups. Providence
(RI): American Mathematical Society; 2006. (Memoirs of the American Mathematical Society; 202,
no. 949).
[44] Heegmann MA. Essai d’une nouvelle m ́ethode de r ́esolution des ́equations alg ́ebriques au moyen des
s ́eries infinies [Essay on a new method for solving algebraic equations using infinite series]. Soc imp
sci de agric arts lille corresp soc philomathique. 1861.
[45] Uytdewilligen GA. The roots of any polynomial equation. arXiv.org; 2004.
[46] Kamyshlov V, Bystrov V. Analytical method for finding polynomial roots. Appl math sci. 2015;9:4737–
4760.
[47] Stanley RP. Catalan numbers. Cambridge: Cambridge University Press; 2015.
[48] Roman S. An introduction to Catalan numbers. Compact Textbooks in mathematics. Cham: Springer;
2015.
[49] Koshy T. Catalan numbers with applications. Oxford: Oxford University Press; 2008.
[50] Aval JC. Multivariate Fuss-Catalan numbers. Discrete Math. 2007;308:4660–4669.
[51] Schuetz A, Whieldon G. Polygonal dissections and reversions of series. Involve. 2016;9(2):223–236.
[52] Rhoades B. Enumeration of connected Catalan objects by type. Eur J Comb. 2011;32:330–338.
[53] Knuth DE. The art of computer programming, vol. 1: fundamental algorithms. 3rd ed. Reading (MA):
Addison-Wesley; 1997.
[54] Graham RL, Knuth DE, Patashnik O. Concrete mathematics: a foundation for computer science. Read-
ing: Addison-Wesley; 1989.
[55] Polya G. On picture-writing. Amer Math Monthly. 1956;63(10):689–697. Reprinted in Classic papers ́
in combinatorics, Gessel and Rota, eds., Birkh ̈auser, Boston, 1987.
[56] Wildberger NJ. Box arithmetic. YouTube; 2021. Playlist from the Insights Into Mathematics chan-
nel, retrieved September 18, 2023. Available from:https://www.youtube.com/watch?v=4xoF2SRp194&
list=PLIljB45xT85B0aMG-G9oqj-NPIuBMnq8z&index=19.
[57] Wildberger NJ. Data structures in mathematics math foundations 151. YouTube; 2015. Insights Into
Mathematics channel, retrieved September 18, 2023. Available from:https://youtu.be/q2beQrKjtzs.
[58] Wallis J. A treatise of algebra, both historical and practical. London: John Playford for Richard Davis;
1685.
N. J. WILDBERGER received his B. Sc. from the University of Toronto and his Ph. D. from Yale University.
He taught at Stanford and the University of Toronto before arriving in 1990 at UNSW Sydney. Recently retired,
he is now a UNSW Honorary Professor. Norman is an ardent YouTuber, developing Rational Trigonometry,
Chromogeometry, Universal Hyperbolic Geometry, the Algebra of Boole, the Algebraic Calculus, Box Arith-
metic, and more. His other research interests include representation theory, hypergroups, and Old Babylonian
mathematics.
n.wildberger@unsw.edu.au

DEAN RUBINE is the volunteer MATHCOUNTS co-coach at Oyster River Middle School in Durham, New
Hampshire. In 2023, he served as New Hampshire state MATHCOUNTS coach. In 1982, he received both his
Bachelor’s degree in Computer Science and Engineering and his Master’s degree in Electrical Engineering and
Computer Science from MIT, and in 1991, his Ph.D. from the Carnegie Mellon University School of Computer
Science. His Ph.D. thesis explored the use of gestures to operate computers. He served on the faculty of CMU
SCS for several years before joining the private sector.
DeanRubineMath@gmail.com