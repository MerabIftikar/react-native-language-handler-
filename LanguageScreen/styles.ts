import { StyleSheet } from 'react-native';
import appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.black,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    languageList: {
        marginVertical: 30
    },
    languageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 1,
        borderColor: appColors.gray,
        borderRadius: 20,
        marginBottom: 10
    },
    selectedLanguageItem: {
        borderColor: appColors.yellowD8
    },
    flag: {
        fontSize: 24,
        marginRight: 10
    },
    languageText: {
        flex: 1,
        color: appColors.white,
        fontSize: 18
    },
    checkMark: {
        fontSize: 15,
        color: appColors.yellowD8
    },
    saveButton: {
        backgroundColor: appColors.yellowD8,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 'auto'
    },
    saveButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: appColors.black
    }
});

export default styles;
