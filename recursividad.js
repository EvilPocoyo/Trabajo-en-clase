// Es un metodo de recursividad, es decir en terminos muy generales que se cicla sin un ciclo :)
/*function funcion(num){
    if(num == 1){
        return 0
    } else if (num == 2){
        return 1
    } else if (num > 2){
        return funcion(num -1) + funcion(num - 2)
    }
}

for(let i = 1; i <= 15; i++){
    console.log(funcion(i))
}*/

class Nodo{
    constructor(numero){
        this.numero = numero;
        this.next = null;
    }
}

class Lista{
    constructor(){
        this.primero = null; 
    }
    
    agregar(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
        }else{
            let aux = this.primero;
            while(aux.next != null){
                aux = aux.next;
                
            }
            aux.next = nuevo;
        }
    }

    agregarInicio(nuevo){
        if(this.primero == null){
            this.primero = nuevo;
        }else{
            nuevo.next = this.primero;
            this.primero = nuevo;
        }
    }

    listar(){
        let aux = this.primero;
        let cadena = "";
        while(aux){
            cadena = cadena + "-> " + aux.numero;
            aux = aux.next;
        }
        return cadena;
    }

    inverso(){
        let aux = this.primero;
        let cadena = "";
        while(aux){
            cadena = aux.numero + " -> " + cadena;
            aux = aux.next;
        }
        return cadena;
    }

    extrarPrimero(){
        let aux = this.primero;
        this.primero = this.primero.next
        return aux;
    }

    extrarUltimo(){
        let ultimo = this.ultimo();
        let aux = this.primero;
        while(aux.next != ultimo){
            aux = aux.next;
        }
        aux.next = null;
        return ultimo;
    }

    ultimo(nodo = this.primero){
        if(nodo.next){
            return this.ultimo(nodo.next)
        }
        return nodo;
    }
}

let datos = new Lista();
let num = new Nodo(10);
datos.agregar(num);
num = new Nodo(8)
datos.agregar(num);
num = new Nodo(6)
datos.agregar(num);



console.log(datos);
console.log(datos.extrarUltimo())
console.log(datos.listar())