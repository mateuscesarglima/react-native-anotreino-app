import { db } from "../../config/firebase";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";

export async function salvarFicha(data){
    try{
        await addDoc(collection(db, 'fichas'), data)
        return 'ok'
    } catch(error){
        console.log('Erro add produto: ', error)
        return 'erro'
    }
}

export async function pegarFichas(){
    try {
        const querySnapshot = await getDocs(collection(db, "fichas"));
        let fichas = []
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            let ficha = {id: doc.id, ...doc.data()}
            fichas.push(ficha)
        });
        return fichas
    } catch(error){
        console.log(error)
        return[]
    }
}