class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    static authenticate(username, password) {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        return users.some(user => user.username === username && user.password === password);
    }

    save() {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.some(user => user.username === this.username)) {
            throw new Error('Username already exists');
        }
        
        users.push({
            username: this.username,
            password: this.password
        });
        
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', this.username);
    }

    static logout() {
        localStorage.removeItem('currentUser');
    }
}