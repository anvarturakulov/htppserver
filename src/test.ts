function Component(id: number) {
    console.log('init component')
    return (target: Function) => {
        console.log('run component')
        target.prototype.id = id
    }
}

function Logger() {
    console.log('init Logger')
    return (target: Function) => {
        console.log(target.prototype.id)
        // target.prototype.id = id
        
    }
}

@Logger()
@Component(1)
export class User {
    id?: number

    updateId(newId:number) {
        this.id = newId
        return this.id
    }
}

console.log(new User().id)