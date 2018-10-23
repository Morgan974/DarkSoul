import './carte.html'


/* ETAPE 8
On import "Template" et "Collection"
puis on crée un events qui agits sur le "Template" "carte"
qui s'active sur un "click" sur un boutton ayant la class="delete"
(carte.html, l.4)
*/
import { Template } from 'meteor/templating'
import { Collection } from '../api/Collection.js'

Template.carte.events({
    'click .delete'() {
        Collection.remove(this._id); 
        //on vas dans la "Collection" puis on supprime l'information qui correspond au bouton.
        //this._id = à l'endroit ou le bouton se trouve
    },
});
