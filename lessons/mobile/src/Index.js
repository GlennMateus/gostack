import React, { useState, useEffect } from 'react'
import {
    SafeAreaView
    , FlatList
    , Text
    , StyleSheet
    , StatusBar
    , TouchableOpacity
}
    from 'react-native'

import api from './services/api'

// View: div, footer, header, main, aside, section
// All elements have an abstract meaning
// Elements don't have style by default
// CSS is build inside JS files

export default function App() {
    const [projects, setProjects] = useState([]);
    const [fetchData, setFetchData] = useState(false);

    useEffect(() => {
        api.get('projects')
            .then(response => {
                setProjects(response.data);
                console.log(response.data)
            })
    }, [])

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Glenn Mateus'
        });

        setProjects([...projects, response.data])
    }

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}> {project.title} </Text>
                    )}
                />
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}>Adicionar projeto</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold'
    },
    project: {
        color: '#fff',
        fontSize: 28,
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16
    }
})