const issue = {
    title: "Issue 1",
    repositoryNameAssociated: "none",
    status: "active",
    numberOfComments: 4,
    labels: ["urgent","deployment"],
    author: "OlafRuv",
    dateCreated: "01/01/2022",
    lastUpdated: "12/05/2022",

    getTitleAndAuthor: function(){
        return `Issue Name: ${this.title}, Issue Author ${this.author}`; 
    },

    getGeneralInfo: function(){
        return `        
        title: ${this.title}
        repositoryNameAssociated: ${this.repositoryNameAssociated}
        status: ${this.status}
        numberOfComments: ${this.numberOfComments}
        labels: ${this.labels}
        author: ${this.author}
        dateCreated: ${this.dateCreated}
        lastUpdated: ${this.lastUpdated}`;
    }
}

console.log(issue.getGeneralInfo())