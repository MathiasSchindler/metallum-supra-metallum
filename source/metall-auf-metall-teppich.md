# Tapete Metalli · Der Teppich von „Metall auf Metall“

Ein Wandteppich im Stil des Teppichs von Bayeux über den Rechtsstreit Kraftwerk ./. Pelham, 1977–2026, in 25 Szenen. Jede Szene ist als eigenständiger Prompt für ein bildgenerierendes Modell geschrieben.

---

## Gebrauchsanweisung

- **Jeder Prompt ist vollständig.** Jeder Prompt enthält den identischen Stilblock (Format, Technik, Palette, Bordüren) und danach den Szeneninhalt. So lassen sich die Szenen einzeln, in beliebiger Reihenfolge und auch mit verschiedenen Modellen generieren, ohne dass der Look auseinanderfällt.
- **Prompts auf Englisch, Inschriften auf Latein.** Bildmodelle folgen englischen Anweisungen zuverlässiger. Die lateinischen Inschriften stehen in Großbuchstaben mit V statt U und Mittelpunkten als Worttrenner, wie im Original.
- **Text nachbessern.** Bildmodelle verstümmeln längere Inschriften gern. Wenn eine Inschrift nicht sauber gerendert wird, generiert man die Szene ohne Text („leave a blank strip for the inscription“) und setzt die Inschrift nachträglich in einer romanischen Kapitalis ein (z. B. „Bayeux“-Fonts oder eine Uncial/Capitalis).
- **Aneinanderreihen.** Format 3:1. Jede Szene endet links und rechts mit einem Baum oder Gebäude als Trenner, damit sich die Panels zu einem durchgehenden Fries montieren lassen.
- **Keine Porträts.** Die realen Beteiligten werden nicht porträtähnlich dargestellt, sondern wie im Original über Attribute, Farben und Inschrift identifiziert.

---

## Figuren- und Motivschlüssel (Continuity Bible)

Diese Beschreibungen stecken wortgleich in den jeweiligen Prompts. So bleiben die Figuren über alle Szenen wiedererkennbar.

| Figur / Motiv | Inschrift | Beschreibung im Prompt |
|---|---|---|
| Ralf Hütter | RADVLFVS | slim clean-shaven man, short dark neatly combed hair, slate-blue tunic with red collar, narrow black belt, stiff upright posture like an automaton |
| Florian Schneider | FLORIANVS | same costume as Radulfus, slightly taller, longer face, moves in perfect sync with him |
| Rechtsnachfolgerin von Florian Schneider (ab 2020) | HERES | woman in a slate-blue gown with red collar and a white veil, carrying Florianus' slate-blue banner |
| Moses Pelham | MOSES | broad-shouldered man with close-cropped dark hair and a short dark beard, terracotta-red tunic with ochre trim |
| Sabrina Setlur | SABRINA | young woman with long dark hair, sage-green gown with ochre trim, holding an embroidered microphone |
| **Das Sample** | – | a short piece of blue-grey iron chain of exactly four links |
| **Der Loop** | – | the same four iron links forged into a closed ring, slightly larger, with small motion lines around it |
| **Die Akte** | – | running gag: the case file grows in every scene, from one scroll to a bundle, a chest, a cart and finally a wagon train |
| Kraftwerk-Banner | – | slate-blue pennant with a hammer striking an anvil |
| Pelham-Banner | – | terracotta pennant showing the iron ring (the loop) |
| LG/OLG Hamburg | HAMMABVRGVM | hall with a gate of three white towers on red, judges in **black robes** |
| BGH Karlsruhe | CAROLSRVHA | palace hall, the town drawn as a fan of streets radiating from a tower, judges in **crimson robes with velvet collars** |
| BVerfG Karlsruhe | – | same town, separate hall, judges in **scarlet robes with white jabots and scarlet caps** |
| EuGH Luxemburg | LVXEMBVRGVM | hall between **two tall golden towers**, judges in **dark crimson robes**, Grand Chamber = many judges on a long bench |
| Generalanwalt/-anwältin am EuGH | ADVOCATVS GENERALIS | single figure in dark crimson robe at a lectern, speaking alone |
| Pastiche (ab 2021) | PASTICHE | personification: a woman in a parti-colored gown (half slate blue, half terracotta) holding up a mirror in which her reflection is visibly different |

---

## Stilblock (in jedem Prompt enthalten)

> Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

---

## Szene 0 · Titelfeld

**Inschrift:** HIC INCIPIT HISTORIA DE METALLO SVPER METALLVM
*Hier beginnt die Geschichte von Metall auf Metall.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: Title panel of the frieze. In the center, a large heraldic arrangement: a blacksmith's hammer striking an anvil, sparks shown as small ochre crosses. Below the anvil lies a short piece of blue-grey iron chain of exactly four links. To the left stands a slate-blue pennant with a hammer-and-anvil emblem, to the right a terracotta pennant showing a closed iron ring. Between them a pair of embroidered scales of justice hangs from a stylized tree, unbalanced. In the upper and lower borders the fabulous animals carry tiny scrolls in their beaks. Inscription across the top: "HIC INCIPIT HISTORIA DE METALLO SVPER METALLVM".
```

---

## Szene 1 · Düsseldorf 1977: Metall auf Metall entsteht

Kraftwerk nehmen im Kling-Klang-Studio in Düsseldorf „Metall auf Metall“ auf, ein Stück mit metallischer Rhythmussequenz, erschienen 1977 auf dem Album „Trans Europa Express“.

**Inschrift:** HIC RADVLFVS ET FLORIANVS APVD DVSSELDORPIVM METALLVM SVPER METALLVM PERCVTIVNT · ANNO MCMLXXVII
*Hier schlagen Radulfus und Florianus in Düsseldorf Metall auf Metall. Im Jahr 1977.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A Romanesque workshop building on the left, labeled with a small arch, represents the studio in Düsseldorf; the Rhine runs below it as wavy blue-green lines. Inside and in front of it two men work in perfect sync: RADVLFVS, a slim clean-shaven man with short dark neatly combed hair, slate-blue tunic with red collar and narrow black belt, stiff upright posture like an automaton; and FLORIANVS, same costume, slightly taller with a longer face. Each swings a smith's hammer onto a metal plate resting on an anvil; sparks fly as ochre crosses and small wavy lines show sound. Behind them stand wooden chests covered with rows of knobs and small dials (synthesizers as naive anachronisms), with cables drawn as twisted cords. From the anvils a short piece of blue-grey iron chain of exactly four links emerges, glowing. On the right a small assistant carries a large black disc like a round shield. A slate-blue pennant with a hammer-and-anvil emblem stands by the door. Inscription across the top: "HIC RADVLFVS ET FLORIANVS APVD DVSSELDORPIVM METALLVM SVPER METALLVM PERCVTIVNT · ANNO MCMLXXVII".
```

---

## Szene 2 · Die Platte erscheint

Das Album wird veröffentlicht. Der Titel „Trans Europa Express“ wird als mittelalterlicher Wagenzug gezeigt. Die Gestaltung des Original-Covers wird bewusst nicht nachgebildet.

**Inschrift:** ET HIC DISCVS TRANS EVROPAM VEHITVR
*Und hier wird die Scheibe durch Europa gefahren.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A long train of four connected wooden carts, drawn by two horses with contrasting colored legs (one blue-legged, one ochre-legged), rolls from left to right across the main register. The carts are streamlined like a medieval idea of an express train, with round wheels and small windows. On the open carts stand large black discs, each with a small ochre center, like shields stacked for a campaign. Townspeople along the way, in sage-green and buff tunics, hold their hands to their ears and nod, some dancing stiffly. Small Romanesque towns with towers mark the route in the background, one by a river. In the lower border, little birds hold tiny black discs. Inscription across the top: "ET HIC DISCVS TRANS EVROPAM VEHITVR".
```

---

## Szene 3 · Frankfurt 1997: das Sample

Moses Pelham kopiert elektronisch etwa zwei Sekunden der Rhythmussequenz, verlangsamt sie leicht und unterlegt sie dem Titel „Nur mir“ in fortlaufender Wiederholung.

**Inschrift:** HIC MOSES DVAS SECVNDAS EX METALLO ABSCIDIT · ET IN ORBEM SINE FINE NECTIT
*Hier schneidet Moses zwei Sekunden aus dem Metall und fügt sie zu einem endlosen Ring.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A workshop in Frankfurt, shown as a Romanesque building with a river (the Main) below. In the center MOSES, a broad-shouldered man with close-cropped dark hair and a short dark beard, wearing a terracotta-red tunic with ochre trim, sits at a long wooden table covered with knobs, sliders and small square pads (a sampler and mixing desk as naive anachronism). On the table lies a large black disc. With a pair of big shears he cuts out a short piece of blue-grey iron chain of exactly four links from the disc. In the next step, to the right, he stands at a small forge and bends the four links into a closed iron ring, with small motion lines circling it to show endless repetition. A snail crawls along the table edge (the sample is slowed down). A terracotta pennant with an iron ring emblem hangs on the wall. In the lower border a griffin chases its own tail in a circle. Inscription across the top: "HIC MOSES DVAS SECVNDAS EX METALLO ABSCIDIT · ET IN ORBEM SINE FINE NECTIT".
```

---

## Szene 4 · „Nur mir“

1997 erscheint „Nur mir“ von Sabrina Setlur, produziert von Pelham, veröffentlicht von der Pelham GmbH. 2004 erscheint der Titel erneut.

**Inschrift:** HIC SABRINA CANTAT · MIHI SOLI · ANNO MCMXCVII
*Hier singt Sabrina: „Nur mir.“ Im Jahr 1997.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A wooden stage under a Romanesque arch. On it stands SABRINA, a young woman with long dark hair in a sage-green gown with ochre trim, singing into an embroidered microphone, her other hand raised in a commanding gesture. Behind her, hung on a post like a great bell, turns the closed iron ring made of four blue-grey links, with motion lines around it. Next to the stage MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, operates a table with knobs and nods to the rhythm. A small banner on the stage reads "NVR MIR". In front of the stage a crowd of young people in mixed buff, ochre and blue tunics dance with raised arms and bobbing heads. Two figures on the right carry away stacks of round silver discs in baskets. Inscription across the top: "HIC SABRINA CANTAT · MIHI SOLI · ANNO MCMXCVII".
```

---

## Szene 5 · Kraftwerk hören zu, 1999

Hütter und Schneider erkennen ihre Sequenz und klagen 1999 vor dem Landgericht Hamburg auf Unterlassung, Schadensersatz, Auskunft und Herausgabe der Tonträger zur Vernichtung. Gestützt wird die Klage vor allem auf ihr Leistungsschutzrecht als Tonträgerhersteller (§ 85 UrhG).

**Inschrift:** HIC RADVLFVS ET FLORIANVS AVDIVNT ET IRASCVNTVR · ET NVNTIOS HAMMABVRGVM MITTVNT · ANNO MCMXCIX
*Hier hören Radulfus und Florianus zu und erzürnen. Sie schicken Boten nach Hamburg. Im Jahr 1999.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: Left: inside a Romanesque hall sit RADVLFVS and FLORIANVS, two slim clean-shaven men with short dark neatly combed hair in identical slate-blue tunics with red collars and narrow black belts, stiff like automatons. They wear large embroidered headphones and listen to a small round disc player; from it floats a closed iron ring made of four blue-grey links. Both point at the ring with oversized index fingers, their mouths open in anger. Center: they hand a single sealed scroll to a messenger. Right: the messenger gallops away on a horse with blue legs toward a city gate with three white towers on red (Hamburg). A slate-blue pennant with hammer-and-anvil emblem flies from the hall. In the lower border, two lions bare their teeth at each other. Inscription across the top: "HIC RADVLFVS ET FLORIANVS AVDIVNT ET IRASCVNTVR · ET NVNTIOS HAMMABVRGVM MITTVNT · ANNO MCMXCIX".
```

---

## Szene 6 · LG Hamburg, 08.10.2004 (308 O 90/99)

Erste Instanz: Das Landgericht gibt Kraftwerk Recht.

**Inschrift:** HIC IVDICES HAMMABVRGENSES PRIMVM IVDICANT · RADVLFVS ET FLORIANVS VINCVNT · ANNO MMIV
*Hier urteilen die Hamburger Richter zum ersten Mal. Radulfus und Florianus siegen. Im Jahr 2004.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A modest Romanesque court hall whose gable bears a gate of three white towers on red (Hamburg). Inside, a single judge in a black robe sits on a bench and raises one hand in judgment. On the left stand RADVLFVS and FLORIANVS, two slim clean-shaven men with short dark neatly combed hair in identical slate-blue tunics with red collars, stiff like automatons, holding a slate-blue pennant with a hammer-and-anvil emblem; they raise their arms in triumph. On the right stands MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, holding the closed iron ring of four blue-grey links against his chest; he turns his head away. A court clerk holds up a single small scroll marked "308 O 90/99". In the lower border two little figures break round silver discs over their knees. Inscription across the top: "HIC IVDICES HAMMABVRGENSES PRIMVM IVDICANT · RADVLFVS ET FLORIANVS VINCVNT · ANNO MMIV".
```

---

## Szene 7 · OLG Hamburg, 07.06.2006 (5 U 48/05)

Berufung: Das Oberlandesgericht weist Pelhams Berufung zurück. Das Leistungsschutzrecht des Tonträgerherstellers schützt auch kleinste Teile einer Aufnahme. Eine Bagatellgrenze gibt es nicht.

**Inschrift:** HIC IVDICES SVPERIORES HAMMABVRGENSES DICVNT · ETIAM MINIMA PARTICVLA SONI PROTEGITVR · ANNO MMVI
*Hier sagen die höheren Hamburger Richter: Auch das kleinste Klangteilchen ist geschützt. Im Jahr 2006.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A taller Romanesque court hall with a gate of three white towers on red (Hamburg), larger than in the previous scene. Three judges in black robes sit on a raised bench. The middle judge holds up, with a pair of tweezers, one tiny single iron chain link; another judge looks at it through a large round lens. On the left MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, holds the closed iron ring of four blue-grey links and spreads his other hand in protest. On the right RADVLFVS and FLORIANVS, slim clean-shaven men with short dark neatly combed hair in identical slate-blue tunics with red collars, stand stiffly side by side, arms folded. A clerk carries a bundle of three scrolls tied with a cord. In the lower border tiny ants each carry a single tiny chain link. Inscription across the top: "HIC IVDICES SVPERIORES HAMMABVRGENSES DICVNT · ETIAM MINIMA PARTICVLA SONI PROTEGITVR · ANNO MMVI".
```

---

## Szene 8 · BGH, 20.11.2008 (I ZR 112/06), „Metall auf Metall I“

Erster Gang nach Karlsruhe. Der BGH sagt: Schon die Entnahme kleinster Tonfetzen greift in das Tonträgerherstellerrecht ein. Eine freie Benutzung (§ 24 UrhG a. F. analog) ist aber denkbar, es sei denn, man hätte die Sequenz selbst gleichwertig einspielen können. Die Sache geht zurück nach Hamburg.

**Inschrift:** HIC IVDICES IN CAROLSRVHA INTERROGANT · POTVISSETNE IPSE FACERE? · ET CAVSAM REMITTVNT · ANNO MMVIII
*Hier fragen die Richter in Karlsruhe: Hätte er es selbst machen können? Und sie verweisen die Sache zurück. Im Jahr 2008.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: Left: two riders on horses with contrasting colored legs arrive at a palace town drawn as a fan of streets radiating from a central tower (Karlsruhe); one carries a small wooden chest of scrolls on his saddle. Center: a stately palace hall where five judges in crimson robes with velvet collars sit on a long bench. The presiding judge points with an oversized finger toward an empty anvil with a hammer lying beside it, as if asking a question. MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, holding the closed iron ring of four blue-grey links, looks at the anvil and scratches his head. RADVLFVS and FLORIANVS, slim clean-shaven men in identical slate-blue tunics with red collars, stand stiffly behind. Right: a messenger rides back toward a gate with three white towers on red (Hamburg), carrying the chest. Inscription across the top: "HIC IVDICES IN CAROLSRVHA INTERROGANT · POTVISSETNE IPSE FACERE? · ET CAVSAM REMITTVNT · ANNO MMVIII".
```

---

## Szene 9 · OLG Hamburg, 17.08.2011 (5 U 48/05)

Zurück in Hamburg. Das OLG meint, ein durchschnittlich ausgestatteter Musikproduzent hätte die Sequenz selbst nachbauen können. Daher gibt es keine freie Benutzung, und Pelham verliert erneut.

**Inschrift:** HIC FABER MEDIOCRIS EVNDEM SONVM FABRICAT · ERGO MOSES VINCITVR · ANNO MMXI
*Hier schmiedet ein durchschnittlicher Handwerker denselben Klang. Also unterliegt Moses. Im Jahr 2011.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: In front of a court hall with a gate of three white towers on red (Hamburg), three judges in black robes watch an experiment. In the center an ordinary craftsman in a plain buff tunic and leather apron, with an average face, hammers at an anvil and produces a short piece of blue-grey iron chain of exactly four links; he holds it up next to the original four-link chain held by a clerk, and both look identical. The judges nod and point at the two chains. On the left MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, throws up his hands in dismay, his closed iron ring at his feet. On the right RADVLFVS and FLORIANVS, slim clean-shaven men with short dark neatly combed hair in identical slate-blue tunics with red collars, applaud stiffly in perfect sync. A clerk drags a wooden chest of scrolls. Inscription across the top: "HIC FABER MEDIOCRIS EVNDEM SONVM FABRICAT · ERGO MOSES VINCITVR · ANNO MMXI".
```

---

## Szene 10 · BGH, 13.12.2012 (I ZR 182/11), „Metall auf Metall II“

Zweiter Gang nach Karlsruhe. Der BGH weist die Revision zurück. Kraftwerk scheinen am Ziel.

**Inschrift:** HIC IVDICES IN CAROLSRVHA CONFIRMANT · ET MOSES ITERVM VICTVS EST · ANNO MMXII
*Hier bestätigen die Richter in Karlsruhe. Und Moses ist abermals besiegt. Im Jahr 2012.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: The palace hall of the fan-shaped town (Karlsruhe). Five judges in crimson robes with velvet collars sit on a long bench; the presiding judge lowers a sealed scroll with a gesture of finality. On the right RADVLFVS and FLORIANVS, slim clean-shaven men with short dark neatly combed hair in identical slate-blue tunics with red collars, raise their slate-blue hammer-and-anvil pennant high, stiffly victorious. On the left MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, kneels on one knee, the closed iron ring of four blue-grey links lying on the ground before him. Behind him, however, a small group of young figures in loose tunics, some with caps worn backwards and one carrying a portable music box on the shoulder, gather and look determined. A wooden chest of scrolls now sits on a small handcart. Inscription across the top: "HIC IVDICES IN CAROLSRVHA CONFIRMANT · ET MOSES ITERVM VICTVS EST · ANNO MMXII".
```

---

## Szene 11 · BVerfG, 31.05.2016 (1 BvR 1585/13)

Pelham und weitere Beteiligte erheben Verfassungsbeschwerde. Das Bundesverfassungsgericht sieht die Kunstfreiheit (Art. 5 Abs. 3 GG) verletzt. Der Eingriff in das Tonträgerherstellerrecht wiegt gering. Das Kriterium „selbst nachspielen“ verlangt Künstlern zu viel ab und schränkt das genreprägende Sampling unverhältnismäßig ein. Das Gericht hebt beide BGH-Urteile und das Berufungsurteil auf und verweist zurück an den BGH.

**Inschrift:** HIC IVDICES CONSTITVTIONIS LIBERTATEM ARTIS TVENTVR · ET SENTENTIAS RESCINDVNT · ANNO MMXVI
*Hier schützen die Verfassungsrichter die Freiheit der Kunst und heben die Urteile auf. Im Jahr 2016.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A grand hall in the fan-shaped town (Karlsruhe), distinct from the palace hall: eight judges in scarlet robes with white jabots and scarlet caps sit in a row. In the center, on a raised throne, sits a crowned female personification of the Freedom of Art, holding a lyre and a paintbrush; the presiding judge places a large round shield in front of her as protection. Two judges tear three scrolls in half with big gestures; the torn halves flutter down. On the left MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, rises from his knees and lifts the closed iron ring of four blue-grey links; behind him the group of young figures with backwards caps cheers. The ordinary craftsman with his anvil from earlier is gently shown out of the door on the right. RADVLFVS and FLORIANVS, slim clean-shaven men in identical slate-blue tunics with red collars, stand at the edge, stiff and surprised. In the lower border small figures dance upside down on their heads (breakdancing). Inscription across the top: "HIC IVDICES CONSTITVTIONIS LIBERTATEM ARTIS TVENTVR · ET SENTENTIAS RESCINDVNT · ANNO MMXVI".
```

---

## Szene 12 · BVerfG, 09.01.2017 (1 BvR 1585/13), Zwischenspiel

Kostenrechtlicher Nachklapp: Das BVerfG setzt den Gegenstandswert der anwaltlichen Tätigkeit auf 150.000 € fest. In der Bayeux-Logik ist das eine kleine Randszene, wie die Festmahl- und Kochszenen im Original.

**Inschrift:** HIC PRETIVM LITIS AESTIMATVR · CL MILIA · ANNO MMXVII
*Hier wird der Wert des Streits geschätzt: 150.000. Im Jahr 2017.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A small, humorous interlude scene, composed like the feast and kitchen scenes of the Bayeux Tapestry. A single judge in a scarlet robe with white jabot and scarlet cap sits at a counting table with a large balance scale. Lawyers in dark tunics with ink pots on their belts heap ochre coins onto one pan of the scale; a scribe writes figures on a long parchment. Other figures carry in chests of coins on poles, like the men carrying armor to the ships in the original tapestry. In the corner a cat sleeps on a stack of scrolls. No plaintiffs or defendants are present. Inscription across the top: "HIC PRETIVM LITIS AESTIMATVR · CL MILIA · ANNO MMXVII".
```

---

## Szene 13 · BGH, 01.06.2017 (I ZR 115/16), Vorlage an den EuGH

Dritter Gang nach Karlsruhe. Weil das Tonträgerherstellerrecht unionsrechtlich harmonisiert ist, legt der BGH dem EuGH mehrere Fragen zur InfoSoc-Richtlinie vor.

**Inschrift:** HIC IVDICES IN CAROLSRVHA QVAESTIONES LVXEMBVRGVM MITTVNT · ANNO MMXVII
*Hier schicken die Richter in Karlsruhe Fragen nach Luxemburg. Im Jahr 2017.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: Composed like the embarkation and journey scenes of the Bayeux Tapestry. Left: in the palace hall of the fan-shaped town (Karlsruhe), five judges in crimson robes with velvet collars hand over several sealed scrolls, each marked with a large question mark, to a herald. Center: the herald and two companions set off on horses with contrasting colored legs, escorting an ox-drawn cart loaded with two heavy wooden chests of scrolls. They cross a wooded hilly landscape and a river on a small bridge. Right: in the distance rise two tall golden towers (Luxembourg). Behind the cart walk MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, carrying the closed iron ring of four blue-grey links, and RADVLFVS and FLORIANVS, slim clean-shaven men in identical slate-blue tunics with red collars, carrying their slate-blue hammer-and-anvil pennant; the two parties walk apart from each other, not looking at each other. Inscription across the top: "HIC IVDICES IN CAROLSRVHA QVAESTIONES LVXEMBVRGVM MITTVNT · ANNO MMXVII".
```

---

## Szene 14 · Generalanwalt Szpunar, 12.12.2018 (C-476/17)

Der Generalanwalt meint: Sampling ohne Zustimmung verletzt das Recht des Tonträgerherstellers. Es ist kein Zitat, und die Kunstfreiheit trägt keine weitergehende Ausnahme.

**Inschrift:** HIC MACIEIVS ADVOCATVS GENERALIS CENSET · SINE CONSENSV NON LICET · ANNO MMXVIII
*Hier befindet Maciej, der Generalanwalt: Ohne Zustimmung ist es nicht erlaubt. Im Jahr 2018.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A hall between two tall golden towers (Luxembourg). A single figure in a dark crimson robe stands at a carved lectern and speaks alone, one arm raised with an oversized open palm in a gesture of refusal. On the lectern lies an open book. Before him on a small table rests the closed iron ring of four blue-grey links, tied shut with a red ribbon and a wax seal. On the left MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, reaches toward the sealed ring but stops. Next to him a small figure holding a scroll with quotation-mark-like hooks is waved away by the speaker. On the right RADVLFVS and FLORIANVS, slim clean-shaven men in identical slate-blue tunics with red collars, nod stiffly in sync. The empty judges' bench in the background is still unoccupied. Inscription across the top: "HIC MACIEIVS ADVOCATVS GENERALIS CENSET · SINE CONSENSV NON LICET · ANNO MMXVIII".
```

---

## Szene 15 · EuGH (Große Kammer), 29.07.2019 (C-476/17), „Pelham I“

Das Urteil des EuGH:
- Schon ein sehr kurzes Audiofragment kann eine Vervielfältigung sein.
- Wird das Fragment so verändert, dass es beim Hören nicht wiedererkennbar ist, liegt kein Eingriff vor.
- Die deutsche „freie Benutzung“ ist mit der abschließenden Schrankenliste der Richtlinie nicht vereinbar.
- Ein Zitat setzt einen erkennbaren Dialog mit dem Werk voraus.

**Inschrift:** HIC MAGNA CAMERA IVDICAT · QVOD AVRIS AGNOSCIT NON LICET SINE CONSENSV · ET LIBER VSVS EXPELLITVR · ANNO MMXIX
*Hier urteilt die Große Kammer: Was das Ohr wiedererkennt, ist ohne Zustimmung nicht erlaubt. Und die freie Benutzung wird vertrieben. Im Jahr 2019.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A great hall between two tall golden towers (Luxembourg). Along a very long bench sit many judges in dark crimson robes, at least twelve, shown in overlapping rows like the soldiers in the original tapestry. Above the center of the bench hangs a huge embroidered human ear, like a holy relic. In front of it, two small processions: on the left, a blue-grey four-link iron chain carried openly on a cushion is stopped by a guard with crossed spears; on the right, a chain disguised in a mask and cloak, unrecognizable, walks past the guard unhindered. At the right edge, a figure in an old-fashioned German costume carrying a scroll labeled "§ 24" is escorted out of the hall door by two guards. MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, and RADVLFVS and FLORIANVS, slim clean-shaven men in identical slate-blue tunics with red collars, stand at opposite ends of the hall, each looking puzzled at the verdict. Inscription across the top: "HIC MAGNA CAMERA IVDICAT · QVOD AVRIS AGNOSCIT NON LICET SINE CONSENSV · ET LIBER VSVS EXPELLITVR · ANNO MMXIX".
```

---

## Szene 16 · 2020: Florian Schneider stirbt

Florian Schneider stirbt im April 2020. Seine Rechtsnachfolgerin tritt an seiner Stelle in den Rechtsstreit ein. Die Komposition zitiert respektvoll die Sterbe- und Begräbnisszene König Edwards im Original, das dort übrigens nicht-chronologisch erzählt wird.

**Inschrift:** HIC FLORIANVS OBIIT · ET HERES EIVS LITEM SVSCIPIT · ANNO MMXX
*Hier ist Florianus gestorben. Und seine Erbin übernimmt den Streit. Im Jahr 2020.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A quiet, respectful scene modeled on the deathbed and funeral of King Edward in the Bayeux Tapestry. Left: a two-storey Romanesque house; in the upper room FLORIANVS, a tall slim man in a slate-blue garment with red collar, lies at rest on a bed, surrounded by mourning figures; a hand of blessing reaches down from a cloud above. Center: a slow procession carries a shrouded bier, accompanied by two small bell-ringers. Right: a woman in a slate-blue gown with red collar and a white veil, labeled HERES, receives the slate-blue hammer-and-anvil pennant from RADVLFVS, a slim clean-shaven man with short dark neatly combed hair in a slate-blue tunic with red collar, who now stands alone. No triumphant gestures, muted mood. In the lower border the animals lie down with lowered heads. Inscription across the top: "HIC FLORIANVS OBIIT · ET HERES EIVS LITEM SVSCIPIT · ANNO MMXX".
```

---

## Szene 17 · BGH, 30.04.2020 (I ZR 115/16), „Metall auf Metall IV“

Vierter Gang nach Karlsruhe. Der BGH setzt den EuGH um und teilt die Zeit:
- Bis zum 22.12.2002, dem Ende der Umsetzungsfrist der InfoSoc-Richtlinie, ist das Sampling als freie Benutzung zulässig.
- Danach gilt die freie Benutzung nicht mehr, und auch ein Zitat scheidet aus.
- Zur weiteren Klärung geht die Sache erneut nach Hamburg.

**Inschrift:** HIC IVDICES IN CAROLSRVHA TEMPVS DIVIDVNT · ANTE ANNVM MMII LICVIT · POSTEA NON · ET ITERVM HAMMABVRGVM · ANNO MMXX
*Hier teilen die Richter in Karlsruhe die Zeit: Vor 2002 war es erlaubt, danach nicht. Und abermals nach Hamburg. Im Jahr 2020.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: The palace hall of the fan-shaped town (Karlsruhe). Five judges in crimson robes with velvet collars stretch a long embroidered ribbon across the hall like a calendar strip with small year marks. Two judges cut it with large shears at one point marked "MMII". The left part of the ribbon is sage green, the right part terracotta red. On the green side MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, holds up the closed iron ring of four blue-grey links with relief. On the red side stand RADVLFVS, a slim clean-shaven man in a slate-blue tunic with red collar, and HERES, a woman in a slate-blue gown with red collar and white veil, holding the hammer-and-anvil pennant. Right: a weary messenger loads a now very large chest of scrolls onto a cart and heads once more toward a gate with three white towers on red (Hamburg); his horse looks exhausted. Inscription across the top: "HIC IVDICES IN CAROLSRVHA TEMPVS DIVIDVNT · ANTE ANNVM MMII LICVIT · POSTEA NON · ET ITERVM HAMMABVRGVM · ANNO MMXX".
```

---

## Szene 18 · 07.06.2021: Die Pastiche-Schranke wird Gesetz

Kein Gericht, aber der Wendepunkt: Mit der Urheberrechtsreform tritt § 51a UrhG in Kraft. Karikatur, Parodie und Pastiche sind seitdem erlaubt, auch gegenüber dem Tonträgerherstellerrecht. Damit gibt es einen dritten Zeitraum.

**Inschrift:** HIC LEX NOVA NASCITVR · ET PASTICHE IN MVNDVM VENIT · VII DIE IVNII MMXXI
*Hier wird ein neues Gesetz geboren, und Pastiche kommt in die Welt. Am 7. Juni 2021.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: Left: a large assembly hall with a round domed roof drawn in Romanesque manner, filled with rows of lawmakers in mixed colored tunics raising their hands to vote. A scribe holds up a parchment labeled "§ 51a". Center: from the open doors of the hall steps a new personification, PASTICHE: a woman in a parti-colored gown, one half slate blue and one half terracotta, holding up a hand mirror in which her reflection is visibly different (different hair color, different pose). Beside her walk two smaller companions: a jester with a belled cap (Parody) and a figure with an exaggerated large nose (Caricature). Right: a hopeful MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, bows and offers her the closed iron ring of four blue-grey links. In the upper border two birds hold a small comet, like Halley's comet in the original tapestry, as an omen. Inscription across the top: "HIC LEX NOVA NASCITVR · ET PASTICHE IN MVNDVM VENIT · VII DIE IVNII MMXXI".
```

---

## Szene 19 · OLG Hamburg, 28.04.2022 (5 U 48/05)

Das OLG entwickelt eine Drei-Zeitraum-Lösung:
- Bis 2002 liegt keine Verletzung vor.
- Von 2002 bis 6.6.2021 liegt eine Verletzung vor, mit Schadensersatz und Auskunft für Kraftwerk.
- Seit 7.6.2021 ist das Sampling als Pastiche zulässig.

Das OLG lässt die Revision erneut zu.

**Inschrift:** HIC IVDICES HAMMABVRGENSES TRIA TEMPORA DISCERNVNT · PRIMVM LICITVM · SECVNDVM ILLICITVM · TERTIVM PASTICHE · ANNO MMXXII
*Hier unterscheiden die Hamburger Richter drei Zeiten: die erste erlaubt, die zweite unerlaubt, die dritte Pastiche. Im Jahr 2022.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: The court hall with a gate of three white towers on red (Hamburg) is shown with three arched doorways side by side, like a triptych. Three judges in black robes stand in front, each pointing to one door. First door (sage green): MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, walks through freely with the closed iron ring of four blue-grey links. Second door (terracotta red): MOSES hands a sack of ochre coins to RADVLFVS, a slim clean-shaven man in a slate-blue tunic with red collar, and to HERES, a woman in a slate-blue gown with red collar and white veil. Third door (parti-colored slate blue and terracotta): PASTICHE, a woman in a parti-colored gown holding a mirror with a different reflection, takes MOSES by the hand and leads him through, the iron ring hanging from her wrist. At the far right, a clerk opens the gate again toward the road to the fan-shaped town (Karlsruhe); the case files now fill an entire cart. Inscription across the top: "HIC IVDICES HAMMABVRGENSES TRIA TEMPORA DISCERNVNT · PRIMVM LICITVM · SECVNDVM ILLICITVM · TERTIVM PASTICHE · ANNO MMXXII".
```

---

## Szene 20 · BGH, 14.09.2023 (I ZR 74/22), „Was ist ein Pastiche?“

Fünfter Gang nach Karlsruhe, auf Revision von Kraftwerk. Der BGH weiß nicht, was „Pastiche“ unionsrechtlich bedeutet. Ist es ein Auffangtatbestand für jede künstlerische Auseinandersetzung? Braucht es Humor, Stilnachahmung oder Hommage? Kommt es auf die Absicht an? Er legt die Fragen erneut dem EuGH vor.

**Inschrift:** HIC IVDICES IN CAROLSRVHA ROGANT · QVID EST PASTICHE? · ET ITERVM LVXEMBVRGVM MITTVNT · ANNO MMXXIII
*Hier fragen die Richter in Karlsruhe: Was ist Pastiche? Und sie schicken abermals nach Luxemburg. Im Jahr 2023.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: The palace hall of the fan-shaped town (Karlsruhe). In the center stands PASTICHE, a woman in a parti-colored gown, one half slate blue and one half terracotta, holding a hand mirror with a different reflection. Five judges in crimson robes with velvet collars walk around her in a circle, examining her: one measures her with a long ruler, one peers through a lens, one holds up a jester's cap next to her head, one scratches his head, one writes on a scroll covered with large question marks. On the left RADVLFVS, a slim clean-shaven man in a slate-blue tunic with red collar, and HERES, a woman in a slate-blue gown with red collar and white veil, point accusingly at PASTICHE. On the right MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, stands protectively with the closed iron ring of four blue-grey links. At the far right a herald rides off again toward two tall golden towers (Luxembourg), dragging a long wagon train of files. Inscription across the top: "HIC IVDICES IN CAROLSRVHA ROGANT · QVID EST PASTICHE? · ET ITERVM LVXEMBVRGVM MITTVNT · ANNO MMXXIII".
```

---

## Szene 21 · Generalanwalt Emiliou, 17.06.2025 (C-590/23)

Generalanwalt Nicholas Emiliou schlägt eine dreiteilige Definition des Pastiche vor. Ein besonderer Zweck wie Humor, Stilnachahmung oder Hommage ist danach nicht erforderlich. Zugleich kritisiert er, dass Pelham I die Rechte der Tonträgerhersteller zu weit ausgedehnt habe.

**Inschrift:** HIC NICOLAVS ADVOCATVS GENERALIS PASTICHE DEFINIT · ANNO MMXXV
*Hier bestimmt Nikolaus, der Generalanwalt, was Pastiche ist. Im Jahr 2025.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A hall between two tall golden towers (Luxembourg). A single figure in a dark crimson robe stands at a carved lectern and speaks alone, raising three fingers of one hand. Beside the lectern stand three upright stone tablets, each engraved with a simple symbol: an eye (the work is evoked), two similar but different shapes (perceptible differences), and two faces in profile facing each other (dialogue). PASTICHE, a woman in a parti-colored gown, one half slate blue and one half terracotta, holding a hand mirror with a different reflection, stands next to the tablets; the speaker gently takes a jester's cap off her head and sets it aside, showing that humour is not required. On the left MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, listens hopefully with the closed iron ring of four blue-grey links. On the right RADVLFVS, a slim clean-shaven man in a slate-blue tunic with red collar, and HERES, a woman in a slate-blue gown with red collar and white veil, listen stiffly. The judges' bench behind is still empty. Inscription across the top: "HIC NICOLAVS ADVOCATVS GENERALIS PASTICHE DEFINIT · ANNO MMXXV".
```

---

## Szene 22 · EuGH (Große Kammer), 14.04.2026 (C-590/23), „Pelham II“

Pastiche erfasst nach dem Urteil Schöpfungen, die an bestehende Werke erinnern, wahrnehmbare Unterschiede aufweisen und deren Elemente, auch durch Sampling, nutzen, um einen erkennbaren künstlerischen oder kreativen Dialog zu führen. Dieser Dialog kann eine offene Stilnachahmung, eine Hommage oder eine humoristische oder kritische Auseinandersetzung sein. Erkennbar sein muss das für diejenigen, die das Original kennen. Auf eine Absicht kommt es nicht an. Pastiche ist kein Auffangtatbestand, und versteckte Imitationen oder Plagiate fallen nicht darunter.

**Inschrift:** HIC MAGNA CAMERA DICIT · PASTICHE EST DIALOGVS QVI AGNOSCITVR · NON FVRTVM OCCVLTVM · ANNO MMXXVI
*Hier spricht die Große Kammer: Pastiche ist ein Dialog, der erkannt wird, kein heimlicher Diebstahl. Im Jahr 2026.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: A great hall between two tall golden towers (Luxembourg); many judges in dark crimson robes, at least twelve, sit in overlapping rows on a long bench. In the center, on a small stage, two figures face each other and converse with lively hand gestures: one holds the straight blue-grey four-link iron chain (the original), the other holds the closed iron ring made from the same four links (the new work); the two objects visibly resemble each other yet are clearly different. PASTICHE, a woman in a parti-colored gown, one half slate blue and one half terracotta, stands behind them with her hand mirror, presiding over the dialogue. A bystander holding a black disc points at the ring with an expression of recognition. At the right edge, a hooded thief trying to sneak out with a hidden chain under his cloak is seized by two guards. MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, smiles. RADVLFVS, a slim clean-shaven man in a slate-blue tunic with red collar, and HERES, a woman in a slate-blue gown with red collar and white veil, stand stiffly. Inscription across the top: "HIC MAGNA CAMERA DICIT · PASTICHE EST DIALOGVS QVI AGNOSCITVR · NON FVRTVM OCCVLTVM · ANNO MMXXVI".
```

---

## Szene 23 · BGH, 03.09.2026 (I ZR 74/22), „Metall auf Metall V“

Sechster Gang nach Karlsruhe. Der BGH weist Kraftwerks Revision zurück und bestätigt das OLG Hamburg. Seit dem 7. Juni 2021 ist das Sampling als Pastiche nach § 51a UrhG zulässig. Für die Zeit davor bleibt es bei Schadensersatz- und Auskunftsansprüchen.

**Inschrift:** HIC IVDICES IN CAROLSRVHA SENTENTIAM CONFIRMANT · ORBIS MOSIS LICITVS EST · ANNO MMXXVI
*Hier bestätigen die Richter in Karlsruhe das Urteil: Der Ring des Moses ist erlaubt. Im Jahr 2026.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed left and right by a stylized tree or building as a scene divider. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: The palace hall of the fan-shaped town (Karlsruhe). Five judges in crimson robes with velvet collars sit on their bench; the presiding judge hands a sealed scroll to MOSES, broad-shouldered with close-cropped dark hair and short dark beard, terracotta-red tunic with ochre trim, now noticeably older, with a touch of grey in his beard. MOSES hangs the closed iron ring of four blue-grey links on a post like a trophy, and it rings with small sound lines. PASTICHE, a woman in a parti-colored gown, one half slate blue and one half terracotta, holding her hand mirror, stands beside him. On the left RADVLFVS, a slim clean-shaven man with now grey neatly combed hair in a slate-blue tunic with red collar, and HERES, a woman in a slate-blue gown with red collar and white veil, receive a small sack of ochre coins from a clerk, marked "MMII–MMXXI", for the earlier years. Behind everyone, the files form a mountain of chests and scrolls reaching up to the ceiling, with a few small clerks climbing on it. In the upper border the griffins sleep. Inscription across the top: "HIC IVDICES IN CAROLSRVHA SENTENTIAM CONFIRMANT · ORBIS MOSIS LICITVS EST · ANNO MMXXVI".
```

---

## Szene 24 · Epilog: Und noch kein Ende

Für die Zeit vor dem 7.6.2021 ist noch eine Verfassungsbeschwerde beim BVerfG anhängig (1 BvR 948/23). Der Bayeux-Teppich selbst bricht am Ende ausgefranst ab, weil sein Schluss verloren ist. Genau so endet auch dieser Teppich.

**Inschrift:** ET HIC FINIS NONDVM EST
*Und hier ist noch nicht das Ende.*

```
Panel from a continuous medieval embroidered frieze in the exact style of the Bayeux Tapestry (c. 1070). Wide horizontal format, aspect ratio 3:1. Wool embroidery on unbleached, slightly yellowed linen with visible weave; outlines in stem stitch, filled areas in laid-and-couched work. Limited historic palette only: terracotta red, ochre yellow, buff, sage green, dark blue-green, slate blue, near-black brown. Flat figures without perspective or shading, stylized profile and three-quarter heads, oversized expressive hands, deliberately contrasting colors within one figure, horse or object. Three registers: a narrow upper border and a narrow lower border, separated from the main field by thin embroidered lines, filled with paired fabulous animals (griffins, lions, birds) alternating with diagonal tri-colored bars; the wide main register in the middle carries the scene. The scene is framed only on the left by a stylized tree; the right edge is different, see below. A Latin inscription in Romanesque capital letters (V instead of U, words separated by mid-dots) runs along the top of the main register. Modern objects appear as naive embroidered anachronisms in the same stitch technique. No photorealism, no 3D rendering, no gradients, no modern typography, no portrait likeness of real people.

SCENE: Final panel of the frieze, inspired by the lost and frayed ending of the real Bayeux Tapestry. On the left, a lone messenger on a tired horse with blue legs rides off again toward a hall in the fan-shaped town where judges in scarlet robes with white jabots and scarlet caps are waiting; he carries a small scroll marked "1 BvR 948/23". Behind him follows an endless wagon train of files disappearing into the distance. In the middle, a lawyer in a dark tunic sits on a chest of scrolls and stares into the void. The right third of the panel is unfinished: the embroidery thins out, only some figures are sketched as underdrawing in faint brown lines, loose wool threads hang down, the linen edge is ragged and frayed, and a needle with a strand of slate-blue wool is still stuck in the cloth. The inscription across the top breaks off mid-panel: "ET HIC FINIS NONDVM EST".
```

---

## Anhang: Recherche-Notizen

**Belegte Kernfakten**
- **Sachverhalt:** Kraftwerk veröffentlichten 1977 „Metall auf Metall“. Die Beklagten kopierten etwa zwei Sekunden einer Rhythmussequenz und unterlegten sie „Nur mir“ in fortlaufender Wiederholung. Der Titel erschien 1997 und erneut 2004 bei der Pelham GmbH. Einer der Kläger starb 2020, seitdem führt seine Rechtsnachfolgerin den Streit (EuGH-Pressemitteilung 50/26).
- **BVerfG, 09.01.2017:** Gegenstandswertfestsetzung auf 150.000 €.
- **GA Emiliou, 17.06.2025:** dreiteilige Definition; kein besonderer Zweck (Humor, Stilnachahmung, Hommage) erforderlich; Kritik an der weiten Auslegung der Herstellerrechte in Pelham I.
- **EuGH, 14.04.2026 (Große Kammer):** Pastiche-Definition wie in Szene 22. Erkennbarkeit für Kenner des Originals genügt, Absicht ist nicht erforderlich, kein Auffangtatbestand, keine versteckten Imitationen oder Plagiate.
- **BGH, 03.09.2026:** Revision zurückgewiesen, Sampling seit 7.6.2021 als Pastiche zulässig. Für die Zeit davor ist eine Verfassungsbeschwerde anhängig (1 BvR 948/23, laut beck-aktuell).

**Bewusst vereinfacht oder unsicher**
- **Tenor LG Hamburg 2004:** Im Detail nicht nachgeprüft. Die Szene zeigt nur den Sieg der Kläger.
- **Zahl der Vorlagefragen 2017:** Im Prompt steht neutral „Fragen“ statt einer Zahl.
- **Juristische Feinheiten:** Ausgelassen sind etwa der Unterschied zwischen Vervielfältigungs- und Verbreitungsrecht (Art. 9 Vermiet- und Verleih-RL) in Pelham I sowie die Frage der Melodienentnahme. Ein Teppich ist kein Gutachten.
- **Latinisierungen:** RADVLFVS (Ralf), MACIEIVS (Maciej), NICOLAVS (Nicholas), HAMMABVRGVM, CAROLSRVHA, DVSSELDORPIVM, LVXEMBVRGVM. „Pastiche“ bleibt als Fremdwort unübersetzt, so wie der Bayeux-Teppich Namen wie HAROLD unflektiert lässt.

**Quellen**
- EuGH, Pressemitteilung Nr. 50/26 zu C-590/23: https://curia.europa.eu/site/upload/docs/application/pdf/2026-04/cp260050de.pdf
- beck-aktuell zu BGH, 03.09.2026, I ZR 74/22: https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/bgh-izr7422-metall-auf-metall-kraftwerk-urheberstreit-pelham-urteil-bgh-2026-09-03
- beck-aktuell zu EuGH, 14.04.2026: https://www.beck-aktuell.de/heute-im-recht/rechtsprechung/sampling-metall-auf-metall-pelham-kraftwerk-2026-04-14
- LTO zu EuGH C-590/23: https://www.lto.de/recht/hintergruende/h/eugh-c59023-metall-auf-metall-kraftwerk-pelham-pastiche-dialog
- LTO zur Vorlage 2023: https://www.lto.de/recht/nachrichten/n/bgh-Izr7422-vorabentscheidung-eugh-metall-auf-metall-urheberrecht-kraftwerk-musik-sampling-pelham-revision-pastiche
- Verfassungsblog zu den Schlussanträgen Emiliou: https://verfassungsblog.de/antagonistic-unity-of-copyright/
- Lausen Rechtsanwälte zu Pelham II (Drei-Zeitraum-Lösung des OLG): https://lausen.com/eugh-pelham-ii-was-der-neue-pastiche-begriff-fuer-rechteinhaber-bedeutet/
- BVerfG, Gegenstandswert 09.01.2017: https://rewis.io/urteile/urteil/vxb-09-01-2017-1-bvr-158513/
