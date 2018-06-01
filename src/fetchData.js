
async function fetchData (category, base_url, start_url) {
 return fetchRecursive(base_url, start_url, category, [])
}

async function fetchRecursive (base_url, start_url, category, objects_accumulator){
  const responseData = await fetchAction(base_url + start_url);
  const objects_of_category = responseData.objects
                              .filter(object => 
                                object.category == category
                              );
  const next = responseData.next;
  if(!next)
    return [ ...objects_accumulator, ...objects_of_category]
  else 
    return fetchRecursive( base_url ,next, category, [ ...objects_accumulator, ...objects_of_category])
  
}

const fetchAction = (api_endpoint) => {
   return fetch(api_endpoint)
         .then(response => response.json())         
}

export default fetchData;