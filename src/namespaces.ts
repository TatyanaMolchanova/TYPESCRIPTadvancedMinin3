/// <reference path="form-namespace.ts"/>

// type FormType ='inline' | 'block'
// type FormState = 'active' | 'disabled'

// interface FormInfo {
//     type: FormType
//     state: FormState
// }

namespace Form {
    class MyForm {
        private type: FormType = 'inline'
        private state: FormState = 'active'
    
        constructor(public email: string) {
    
        }
        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state
            }
        }
    }
    
    export const myForm = new MyForm('ada@gmail.com')
    
}

console.log(Form.myForm)
