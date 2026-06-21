
const page = async ({params}) => {

  const {slug} = await params;


  return (
    <div>
        <h1>project details section, {slug}</h1>      
    </div>
  )
}

export default page
