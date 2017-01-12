var LinkedList = require('./singly_linked_list');

var basketballTeams = new LinkedList();
basketballTeams.insert("Lakers", "head");
basketballTeams.insert("Blazers", "Lakers");
basketballTeams.insert("Celtics", "Blazers");
basketballTeams.insert("Kings", "Celtics");
basketballTeams.display();
console.log("Removing Celtics");
basketballTeams.remove("Celtics");
basketballTeams.display();
