import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Gs } from '../../../assets/styles/GlobalStyle.tsx';
import { colors } from '../../../assets/styles/Colors.tsx';

interface InputTextProps {
    icon?: any;
    label?: string;
    placeholder: string;
}

function InputText({
    icon,
    label,
    placeholder,
}: InputTextProps): React.JSX.Element {
    return (
        <>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.searchContainer}>
                {icon && <Image source={icon} style={styles.iconContainer} />}
                <TextInput
                    placeholder={placeholder}
                    style={styles.searchInput}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    label: {
        ...Gs.h4,
        ...Gs.textBlack,
        marginTop: 16,
        marginBottom: 4,
    },
    searchContainer: {
        ...Gs.flexRow,
        ...Gs.itemsCenter,
        ...Gs.cornerXL,
        borderWidth: 1,
        borderColor: colors.greyContainer,
        paddingHorizontal: 20,
    },
    iconContainer: {
        width: 24,
        height: 24,
    },
    searchInput: {
        marginLeft: 12,
    },
});
export default InputText;
