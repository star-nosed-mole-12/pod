import Item from './components/Item'

const Sell = () => {

  // const url = ''
  const [item, setItem] = useState(null)

  useEffect(() =>{
    const fetchItem = async () => {
      const response = await fetch(url)
      const json = await response.json()
    }
    //make sure got a good response
    if(response.ok){
      setItem(json)
    }else{
      console.log("get request in item.jsx, has fetch issues")
    }
    fetchItem()
  }, [url])

  return(
  <div className="sell">
   {item && <Item item={item}/>}
  </div>);
}
export default Sell;