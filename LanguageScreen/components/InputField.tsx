import React, { ReactNode, useState, forwardRef } from 'react';
import {
    StyleSheet,
    ViewStyle,
    TextStyle,
    View,
    TextInput,
    TextInputProps,
    Pressable,
    StyleProp
} from 'react-native';
import appColors from '../../../utils/appColors';
import { placeHolderFunction } from '../../../utils';
import { Typography } from '../../../components';
import { EyeOpened, EyeClosed, Vector } from '../../../assets/icons';

interface InputFieldProps extends TextInputProps {
    container?: ViewStyle;
    title?: string;
    description?: string;
    titleStyle?: TextStyle;
    inputStyle?: StyleProp<TextStyle>;
    descriptionStyle?: TextStyle;
    errorStyle?: TextStyle;
    isPassword?: boolean;
    editable?: boolean;
    onEyePress?: () => void;
    RightComponent?: () => ReactNode;
    error?: string;
}

const InputField = forwardRef<TextInput, InputFieldProps>((props, ref) => {
    const {
        children,
        title = "",
        description,
        titleStyle = {},
        descriptionStyle = {},
        errorStyle = {},
        container = {},
        inputStyle = {},
        isPassword = false,
        secureTextEntry,
        onEyePress = placeHolderFunction,
        RightComponent,
        error = "",
        editable = true
    } = props;

    const [isFocused, setIsFocused] = useState<boolean>(false);

    const hasError = error.length > 0;

    let borderColor = appColors.lightGray;
    if (hasError) borderColor = appColors.error;
    else if (isFocused) borderColor = appColors.yellowD8;

    const renderEyeIcon = () => {
        if (isPassword) {
            return (
                <Pressable
                    style={styles.iconContainer}
                    onPress={onEyePress}>
                    {secureTextEntry ? <EyeClosed /> : <EyeOpened />}
                </Pressable>
            );
        }
        return null;
    };

    const renderError = () => {
        if (hasError) {
            return (
                <Typography style={[styles.errorText, errorStyle]}>
                    {`${error}`}
                </Typography>
            );
        }
    };

    const renderDescription = () => {
        if (description) {
            return (
                <Typography style={[styles.descriptionText, descriptionStyle]}>
                    {`${description}`}
                </Typography>
            );
        }
    };

    return (
        <View style={[styles.container, container]}>
            {title ? (
                <Typography style={[styles.titleText, titleStyle]}>
                    {`${title}`}
                </Typography>
            ) : null}
            <View style={[styles.contentContainer, { borderColor }]}>
                <View style={styles.leftIconContainer}>
                    <Vector />
                </View>
                <TextInput
                    ref={ref}
                    key={`${title}`}
                    allowFontScaling={false}
                    style={[
                        styles.inputText,
                        editable ? {} : { color: appColors.lightGray },
                        inputStyle
                    ]}
                    placeholderTextColor={appColors.placeholderTextColor}
                    onFocus={() => setIsFocused(true)}
                    onBlur={(e) => {
                        setIsFocused(false);
                        props.onBlur?.(e);
                    }}
                    {...props}
                />
                {renderEyeIcon()}
                {RightComponent && (
                    <View style={styles.rightComponent}>
                        <RightComponent />
                    </View>
                )}
            </View>
            {renderError()}
            {renderDescription()}
            {children}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    contentContainer: {
        marginTop: 8,
        alignItems: "center",
        flexDirection: "row",
        height: 45,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 8,
        paddingLeft: 10,
    },
    titleText: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '500',
        textAlign: "left",
        color: appColors.white
    },
    descriptionText: {
        fontSize: 11,
        marginTop: 6,
        lineHeight: 12,
        fontWeight: '500',
        color: appColors.lightGray
    },
    errorText: {
        fontSize: 11,
        marginTop: 6,
        lineHeight: 12,
        fontWeight: '400',
        color: appColors.error
    },
    inputText: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        fontSize: 13,
        fontWeight: '400',
        color: appColors.white
    },
    leftIconContainer: {
        marginRight: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        width: 35,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    rightComponent: {
        marginRight: 10,
    }
});

export default InputField;
