/*
* User: name, email, password
*/

// export default function createUser(name = '', email: string, password: string) {
//     const user = {
//         name,
//         email,
//         password
//     }

//     return user;
// }

interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    //techs: string[];
    techs: Array<string | TechObject>
}

export default function createUser({ name = '', email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password
    }

    return user;
}

/**
 * How to define types?
 *  1. name = ''  (by initilizing the variable. It will make the variable optional)
 *  2. email: string (defining its type; makes the variable madatory)
 */