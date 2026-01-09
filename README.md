## Objectifs et fonctionnalités de l’application

L’application a pour but de détecter automatiquement des objets dans une image.
Lister les fonctionnalités attendues :

Entrée
Saisie d’une URL d’image sur une page HTML
Bouton pour lancer l’analyse

Traitement
Chargement du modèle d’IA (TensorFlow.js + coco-ssd)
Analyse de l’image
Détection des objets

Sortie
Liste des objets détectés
Affichage des cadres sur l’image
Score de confiance associé aux objets

Le projet est volontairement limité à un prototype de démonstration, il ne s’agit pas d’un produit final.
Ainsi, certaines fonctionnalités ne sont pas prises en compte, comme la gestion des utilisateurs, le stockage des données ou l’upload d’images locales.
L’application se concentre uniquement sur la détection d’objets à partir d’images accessibles en ligne, dans le but de valider la faisabilité et l’intérêt de la solution.


Le modèle coco-ssd est limité techniquement :
si un objet est trop petit, il ne sera pas détecté par coco-ssd
liste d’objets limitée (80)
qualité d’image peut rendre la détection impossible
Performance et vitesse
Problèmes possibles d’accès aux images (site privé etc, droits d’auteurs)
Le modèle a des cases de détection prédéfinies, ainsi la détection contenir des imprécision de position


## Architecture et flux de fonctionnement


Notre application consiste en une application web d’une page réalisée en HTML/CSS. Cette page contiendra un titre, un champ texte permettant de renseigner un lien URL et un bouton de confirmation.
L’utilisateur pourra ainsi saisir l’URL de l’image qu’il souhaite analyser et appuyer sur le bouton confirmer pour lancer l’analyse.
À l’aide de TenserFlow et du modèle coco-ssd, le programme pourra détecter jusqu’à 80 types objets différents. Ces objets auront tous un champ “bbox” correspondant aux coordonnées de l’objet détecté (exemple : [x, y, width, height ]), un champ “class” représentant le type de l’objet (exemple : person, chair, surfboard…) et un champ “score” inférieur à 1 représentant le niveau de fiabilité de la réponse (exemple : 0.92).
À l’aide de la bibliothèque Canva, le programme dessinera des boîtes autour des objets détectés avec, en légende, le type de l’objet et le niveau de fiabilité de la réponse. L’image sera ensuite retournée à l’utilisateur en s’affichant sur la page web.

## Organisation du travail

La conception de l’application se déroulera comme suit :
Développement de la page web
Détection des objets :
entrée : une image
sortie : liste d’objets { bbox, class, score }
Dessin des boîtes avec légende :
entrée : liste d’objets { bbox, class, score }
sortie : image retouchée

Morgane Farge, Gaétan Pardon et Guillaume Pedrona s’occuperont respectivement de la page web, de la détection d’objets et du dessin des boîtes simultanément.
