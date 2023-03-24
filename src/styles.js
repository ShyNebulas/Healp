"use strict";

import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    addEventButton: {
        backgroundColor: "#2E86C1",
        borderRadius: 5,
        margin: 20,
        marginTop: 60,
        padding: 10
    },
    addEventButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center"
    },
    addEventField: {
        backgroundColor: "#DDDDDD",
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
        margin: 20,
        marginTop: 10
    },
    addEventCreate: {
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 20,
    },

    blockBody: {
        marginBottom: 60
    },
    blockButtonText: {
        color: "#FFFFFF", 
        fontSize: 16,
        textAlign: "center"
    },
    blockDefaultButton: {
        backgroundColor: "#2E86C1",
        borderRadius: 5,
        marginTop: 20,
        padding: 10
    },
    blockRegisteredButton: {
        backgroundColor: "lightgreen",
        borderRadius: 5,
        marginTop: 20,
        padding: 10
    },

    chatsView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },

    directMessageBackgroundSender: { backgroundColor: "lightgreen", margin: 8},
    directMessageBackgroundReceiver: { backgroundColor: "lightgray", margin: 8 },
    directMessageText: { padding: 8 },
    directMessageInput: {
        borderColor: "#F9C2FF",
        borderWidth: 1,
        height: 40,
        margin: 15,
        padding: 5      
    },
    directMessageSubmit: {
        backgroundColor: "#F9C2FF",
        height: 40,
        margin: 8,
        padding: 10
    },
    directMessageShare: {
        backgroundColor: "#ADD8E6",
        height: 40,
        margin: 8,
        padding: 10
    },

    entityBody: {
        backgroundColor: "#2E86C1",
        padding: 10,
        borderRadius: 5,
        margin: 10
    },
    entityTitle: { 
        fontSize: 24,
        color: "#FFFFFF"
    },

    eventsButton: {
        backgroundColor: "#2E86C1",
        borderRadius: 5,
        marginTop: 20,
        padding: 10
    },
    eventsButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        textAlign: "center",
    },
    eventsScrollContainer: {
        marginBottom: 72
    },

    headerTitle: { fontSize: 32 },

    homeContainer: {
        alignItems: "center",
        backgroundColour: "#FFFFFF",
        justifyContent: "center",
        padding: 50
    },

    itemBody: {
        color: "#222222",
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
    },
    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 7,
        paddingBottom: 40
    },
    itemHeader: {
        color: "#222222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    itemImage: { height: 400 }
});

module.exports = styles;



