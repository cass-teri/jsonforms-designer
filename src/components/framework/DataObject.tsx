
export function DataObject(props: { data_object: any}) {

    return <pre className="bg-gray-100 absolute left-0 right-0 max-h-64 overflow-auto border-2 border-gray-300" >{JSON.stringify(props.data_object,null , 4)}</pre>
}
