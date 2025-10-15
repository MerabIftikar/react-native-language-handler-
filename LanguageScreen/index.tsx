import React from 'react';
import { SafeAreaView, Text, FlatList, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import useController from './useController';
import InputField from './components/InputField';
import { Button } from '../../components';
import { useTranslation } from 'react-i18next';

const LanguageScreen = () => {
    const {
        languages,
        selectedLanguage,

        onSelectLanguage,
        onSaveChanges
    } = useController();
    const { t } = useTranslation();

    const renderLanguageItem = ({ item }: { item: { id: string, name: string, flag: string } }) => {
        const isSelected = selectedLanguage === item.id;

        return (
            <TouchableOpacity
                style={[
                    styles.languageItem,
                    isSelected && styles.selectedLanguageItem
                ]}
                onPress={() => onSelectLanguage(item.id)}
            >
                <Text style={styles.flag}>{item.flag}</Text>
                <Text style={styles.languageText}>{item.name}</Text>
                {isSelected && <Text style={styles.checkMark}>✔️</Text>}
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <KeyboardAvoidingView>
            <AppHeader label={t('Language')} />
            <InputField placeholder={t('Search Languages')} />
            <FlatList
                data={languages}
                keyExtractor={(item) => item.id}
                renderItem={renderLanguageItem}
                style={styles.languageList}
            />
            <Button title={t('Save Changes')} onPress={onSaveChanges} container={{marginTop:60}}/>
            </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LanguageScreen;