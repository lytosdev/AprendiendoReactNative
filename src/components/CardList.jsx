import { useState, useEffect } from 'react'
import { Text, View, Button, ActivityIndicator, TextInput, FlatList, StyleSheet } from 'react-native'
import Card from './Card'

const CardList = () => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch(`https://api.disneyapi.dev/characters?page=${page}`)
      .then(response => response.json())
      .then(response => setData(response.data))
      .catch(err => console.error(err))

    setFilter('')
  }, [page])

  return (
    <>

      {!data
        ? <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator size="large" color="blue" /></View>
        : <><TextInput placeholder="Filtrar" style={styles.filter} onChangeText={value => setFilter(value)} value={filter} />
          <FlatList
            data={data.filter(obj => obj.name.toLowerCase().includes(filter.toLowerCase()))}
            renderItem={({ item: obj }) => <Card key={obj._id} name={obj.name} imageUrl={obj.imageUrl}></Card>}
          />
        </>}

      {!data
        ? ''
        : (<>
          <Text style={{ fontWeight: 'bold', alignSelf: 'center', margin: 10 }}>Página {page}/149</Text>

          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <View style={{ width: 120, margin: 5 }}>
              <Button onPress={() => page > 1 && setPage(page - 1)} title="Anterior" />
            </View>
            <View style={{ width: 120, margin: 5 }}>
              <Button onPress={() => page < 149 && setPage(page + 1)} title="Siguiente" />
            </View>
          </View></>)}

    </>
  )
}

const styles = StyleSheet.create({
  filter: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "gray"
  }
})

export default CardList