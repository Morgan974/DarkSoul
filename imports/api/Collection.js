/*  
    Etape 5 (suite):
    On appelle le Module MongoDB avec l'import,

    On lui donne un nom (ici "Collection"),
    et on donne un nom à la liste d'information (ici "information")

    on le lie après au server "server/main.js", import '../imports/api/Collection.js' l.2,
    Suite (Body.html)
        
*/

import { Mongo } from 'meteor/mongo';
export const Collection = new Mongo.Collection('information');