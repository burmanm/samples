/*
 * This example shows what you can do with dynagroups using rhqapi.js
 */

var rhqapi = require("modules:/rhqapi");
var dynaGroups = rhqapi.dynaGroupDefinitions;
// list all dynagroup definitions
dynaGroups.find();

// we can use any params from criteria API like usual
dynaGroups.find({name:"my dynagroup"})

// create a dyna group
var dg = dynaGroups.create({name:"All agents",description:"All agents in inventory",expression:"resource.type.name=RHQ Agent"});

// trigger recalculation
dg.recalculate()

// get managed resource groups generated by this definition
var groups = dg.managedGroups()

