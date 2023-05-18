import React, { useReducer, useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import ToDo from '../Reducer/ToDo';
import UserDetails from '../Context/UserDetails';

function TodoList({ navigation }: any) {
    const contextData = React.useContext(UserDetails);
    const [state, dispatch] = useReducer(ToDo, contextData.state);

    const [inputText, setInputText] = useState("")
    function addTodo() {
        contextData.dispatch({ type: 'addTodo', payload: inputText });
        setInputText('');
    }
    console.log(contextData.state);

    function toggleTodo(index: number) {
        contextData.dispatch({ type: 'toggleTodo', payload: index });
    }

    function setFilter(filter: string) {
        contextData.dispatch({ type: 'setFilter', payload: filter });
    }

    useEffect(() => {
        contextData.setUser({ ...contextData, state: state, dispatch: dispatch })
    }, [])


    return (
        <View>
            <View>
                <TextInput onChangeText={setInputText} value={inputText} />
                <Button title="Add Todo" onPress={addTodo} />
            </View>
            <View>
                {contextData?.state?.todos?.map((todo: any, index: number) => (
                    <Text
                        key={index}
                        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
                        onPress={() => toggleTodo(index)}
                    >
                        {todo.text}
                    </Text>
                ))}
            </View>
            <View>
                <Button title="All" onPress={() => setFilter('all')} />
                <Button title="Completed" onPress={() => setFilter('completed')} />
                <Button title="Incomplete" onPress={() => setFilter('incomplete')} />
                <Button title="go to home" onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    );
}

export default TodoList;