import './body.html'
import './Model2.html'
import './Model3.js'
import './carte.js'
import './formulaire.js'

// Etape 5 (suite2)
// on dit à meteor qu'on utilise des Template
import { Template } from 'meteor/templating'
import { Collection } from '../api/Collection.js'

// on crée une fonction qui se charge de recupérer ce qu'il y à dans nos informations dans notre Collection
// et vas l'afficher (avec un "return")

Template.body.helpers({
    information() {
        return Collection.find({});
    },
});

