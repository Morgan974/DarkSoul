/* 
Etape 7: (suite)
On lie les fichiers et on appelle bien "Template" et "Collection"

Puis on crée l'events nous permetant de recupere puis de envoyer les données
    
Template.formulaire.events'({ })
    ici "formulaire" est egale au template "formulaire"

'submit .nouvelle-inventaire'(event) {}
    submit correspond à l'action de la touche "Entrée" et ça agit sur ".nouvelle-inventaire"
    qui correspond à la class du formulaire ( formulaire.html, l.14 )
*/

import { Template } from 'meteor/templating'
import { Collection } from '../api/Collection.js'

import './formulaire.html'

Template.formulaire.events({
    'submit .nouvelle-information'(event) {

        // Empeche le raffraichissement
        event.preventDefault();

        // Recuper les élements
        const target = event.target;
        const text = target.text.value; //target.text.value = name="text" (formulaire.html, l.15)

        // Ajoute de nouvelle information à la collections
        Collection.insert({
            text, // ce text là est egale à la const text (formulire.js, l.27)
            createdAt: new Date(), // heure actuelle
        });

        // Vide l'input
        target.text.value = '';
    },
});

// Etape 8 : voir fichier "carte.html"