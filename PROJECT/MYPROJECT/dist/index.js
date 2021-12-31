"use strict";
console.log("ciao");
var teams;
(function (teams) {
    teams["first"] = "TeamA";
    teams["second"] = "TeamB";
})(teams || (teams = {}));
class Player {
    constructor(name, strength, stamina, speed, team) {
        this.id = Math.random().toString();
        this.name = name;
        this.strength = strength;
        this.stamina = stamina;
        this.speed = speed;
        this.team = team;
    }
    //chiamo questa funzione quando clicco su un elemento
    changeTeam() {
        console.log(this.team, " prima");
        if (this.team === teams.first) {
            this.team = teams.second;
        }
        else {
            this.team = teams.first;
        }
        console.log(this.team, " dopo");
    }
}
const dummyPlayers = [
    new Player("tom", 20, 30, 50, teams.first),
    new Player("alec", 20, 30, 50, teams.second),
    new Player("jeno", 20, 30, 50, teams.first),
    new Player("remo", 50, 20, 80, teams.second),
    new Player("dino", 20, 30, 50, teams.first),
    new Player("renato", 20, 30, 50, teams.second),
    new Player("jenio", 20, 30, 50, teams.first),
    new Player("rempolo", 50, 20, 80, teams.second),
];
class Component {
    constructor(templateId, hostId, newElementId) {
        this.templateElement = document.getElementById(templateId);
        // this.templateElement =document.getElementById('team-list')! as HTMLTemplateElement
        console.log(this.templateElement);
        this.hostElement = document.getElementById(hostId);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        console.log(this.element);
        this.element.id = `${newElementId}`;
        // this.element.id=teamId;
        this.append();
    }
    append() {
        this.hostElement.appendChild(this.element);
    }
}
class ProjectState {
    constructor() {
        this.listeners = [];
        this.players = [...dummyPlayers];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addListener(listenerFunction) {
        this.listeners.push(listenerFunction);
    }
    updateListeners() {
        for (const listener of this.listeners) {
            listener(this.players.slice());
        }
    }
    //funzione che modifica lo stato quando clicco su un elemento nello schema
    movePlayer(playerId) {
        this.players.forEach((player) => {
            // console.log(player.id===playerId,player.id,playerId);
            if (player.id === playerId) {
                console.log(player.team);
                player.changeTeam();
            }
        });
        console.log(this.players);
        this.updateListeners();
    }
}
const projectState = ProjectState.getInstance();
class ListItem extends Component {
    constructor(hostId, itemId, player) {
        super('list-item', hostId, itemId);
        this.player = player;
        this.clickHandler = () => {
            projectState.movePlayer(this.element.id);
        };
        this.renderContent();
    }
    renderContent() {
        this.element.querySelector('h5').innerText = this.player.name;
        this.element.querySelector('#strength').innerHTML = this.player.strength.toString();
        this.element.querySelector('#speed').innerHTML = this.player.speed.toString();
        this.element.addEventListener('click', this.clickHandler.bind(this));
    }
}
class TeamList extends Component {
    constructor(templateId, hostId, teamId) {
        super(templateId, hostId, teamId);
        this.Team = [];
        this.TeamId = teamId;
        this.configure();
    }
    /* la lista di elementi sarà definita con un altro oggetto che prende un oggetto e  */
    renderList() {
        const teamList = document.getElementById(`${this.TeamId}`);
        teamList.querySelector('ul').innerHTML = "";
        for (const player of this.Team) {
            // teamList.innerHTML = `${teamList.innerHTML} <p>${player.name},${player.team}</p>`; // questo deve essere cambiato in 
            new ListItem(`${this.TeamId.toString()}-ul-list`, player.id, player);
        }
    }
    configure() {
        this.element.querySelector("h3").textContent = this.TeamId.toString();
        this.element.querySelector('ul').id = `${this.TeamId.toString()}-ul-list`; // qui dentro devono essere aggiunti gli elementi
        projectState.addListener((team) => {
            // il team che passo a questa funzione è quello della lista dello stato
            this.Team = team.filter(player => player.team === this.TeamId); // questo deve essere cambiato, per ora devo mostrare solo una lista
            this.renderList();
        });
    }
}
const team1 = new TeamList("team-list", "blocks", teams.first);
const team2 = new TeamList("team-list", "blocks", teams.second);
projectState.updateListeners(); //questo per il primo render
