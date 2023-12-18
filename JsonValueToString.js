function serializeToJsonString(value)
{
    try
    {
        // Use JSON.stringify() to convert value to Json String.
        const jsonString = JSON.stringify(value,null,2);
        
        return jsonString;
    }
    catch(error)
    {
        console.error('Serialization Error:', error.message);
        return null;
    }
}

const data={
    name: 'Himanshu Bhatia',
    age: 21,
    city: 'Pune'
};

const jsonString = serializeToJsonString(data);

if(jsonString!=null)
{
    console.log('Serialized Json:',jsonString);
}
else{
    console.log('Failed to serialize data');
}