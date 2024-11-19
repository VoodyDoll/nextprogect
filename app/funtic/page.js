import Forma from '../components/forma/Forma'
async function getData() {
    const res = await fetch(`http://localhost:5000/1`)
    // Возвращаемое значение не сериализуется,
    // что позволяет возвращать Date, Map, Set и др.

    if (!res.ok) {
        // Это активирует ближайшего предохранителя `error.js`
        throw new Error('Провал получения данных')
    }

    return res.json()
}
export default async function Page() {
    const data = await getData()

    return <main>
        <Forma/>
        <center>

        {data.map((item) => {
            return (
                <p>{item.id}</p>
            )
        })}
    </center>
    </main>
}