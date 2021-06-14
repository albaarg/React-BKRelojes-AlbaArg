import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = (prop) => {
  const {stockT, onAdd} = prop
    const [stockTotal, setStockTotal] = useState(stockT);
    const [stockUsser, setStockUsser] = useState(0);
    const [botonActivo, setBotonActivo] = useState(true);
    const [activo,setActivo]=useState(false)
    const count = stockUsser;
 
    useEffect(() => {
        setStockTotal(stockT);
 
      if(stockTotal === 0){
        setBotonActivo(false);
        if(stockUsser > 0){
          setBotonActivo(true);
        }
      }
    }, [stockTotal,stockUsser,stockT])

    useEffect(() => {
      const itemCollection = db.collection('items');
      const filterCollection = id ? itemCollection.where('category','==', id) : itemCollection;
        filterCollection.get().then((res)=>{
          const documentos = res.docs.map((doc)=>{
            if(doc== null ) {
              setNotFound(true)
          }
            return {
              id: doc.id,
              ...doc.data()
            }}
            );
          setDatos(documentos)
        }).catch((err)=>console.log('ocurrio un error', err))
          .finally(()=>console.log('finalizo'))
        }, [id]);

    
    
    return (

        <ItemCount  stockUsser={stockUsser} stockTotal={stockTotal} sumar={sumar} restar={restar} botonActivo={botonActivo} activo={activo} onAdd={onAdd} count={count}/>

 
          )

          return(
            <>
            <div className="container">
              <div className="row">
              <div className="catalogo">Catalogo</div>
              {notFound == true ? <PageError/> 
              : datos.length > 0 ?  datos.map((dato)=>
                    <ItemList key={dato.id} productos={dato} />)
                     : <img src={loader} className="loader" alt="loader"/>}
              </div> 
            </div>
            </>
        ) 

        }
export default ItemListContainer;