export const addNumber = (value) => ({
    type:"ADDITION",
    payload : value,
})
export const subtractNumber = (value) => ({
    type:"SUBTRACT",
    payload : value,
})
export const multiplyNumber = (value) => ({
    type:"MULTIPLICATION",
    payload : value,
})
export const divideNumber = (value) => ({
    type:"DIVISION",
    payload : value,
})
export const modulusNumber = (value) => ({
    type:"MODULUS",
    payload : value,
})
export const exponentNumber = (value) => ({
    type:"EXPONENT",
    payload : value,
})