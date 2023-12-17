import React from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import InputText from '../../components/InputText';
import { Gs } from '../../../assets/styles/GlobalStyle.tsx';
import { colors } from '../../../assets/styles/Colors.tsx';
import profile from '../../../assets/images/profile_2.png';
import item1 from '../../../assets/images/item_1_a.png';
import item2 from '../../../assets/images/item_1_b.png';
import item3 from '../../../assets/images/item_1_c.png';
import gift from '../../../assets/icons/gift.png';
import notification from '../../../assets/icons/notification.png';
import location from '../../../assets/icons/location.png';
import NewsworthyItem from '../../components/NewsworthyItem';
import { useNavigation } from '@react-navigation/native';
import BottomNav from '../../components/BottomNav';

function Home(): React.JSX.Element {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('Details');
    };

    const newsworthyData = [
        {
            title: 'Hajime',
            address: 'Pantai Utara No. 90',
            price: '$421/day',
            image: require('../../../assets/images/item_2_a.png'),
        },
        {
            title: 'DeepWork',
            address: 'Dahlia Corner No. 11',
            price: '$421/day',
            image: require('../../../assets/images/item_3_a.png'),
        },
    ];

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={Gs.flexRow}>
                    <Image source={profile} style={styles.profileContainer} />
                    <View>
                        <Text style={Gs.textBlack}>Hi, Arlan</Text>
                        <Text style={[Gs.textBlack, Gs.font700]}>
                            @arlanariandi
                        </Text>
                    </View>
                </View>
                <View style={Gs.flexRow}>
                    <Image source={gift} style={styles.iconContainer} />
                    <Image source={notification} style={styles.iconContainer} />
                </View>
            </View>
        );
    };

    const renderSearch = () => {
        return (
            <View style={styles.sectionContainer}>
                <InputText
                    icon={location}
                    placeholder={'Find work spaces in Jakarta'}
                />
            </View>
        );
    };

    const renderPopularSection = () => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionTitle, Gs.h1]}>Popular</Text>
                <View style={Gs.flexRow}>
                    <Image source={item1} style={styles.popularMainImage} />
                    <View>
                        <Image source={item2} style={styles.popularImage} />
                        <Image source={item3} style={styles.popularImage} />
                    </View>
                </View>
                <View style={styles.popularContent}>
                    <View>
                        <Text style={[Gs.h2, Gs.textBlack]}>IndoorWork</Text>
                        <Text style={Gs.textGrey}>Jl. Kenangan No. 10</Text>
                    </View>
                    <View style={styles.popularPriceContainer}>
                        <Text style={styles.popularPriceLabel}>$599/day</Text>
                    </View>
                </View>
            </View>
        );
    };

    const renderNewsworthy = () => {
        return (
            <View style={styles.sectionContainer}>
                <Text style={[styles.sectionTitle, Gs.h1]}>Newsworthy</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={newsworthyData}
                    keyExtractor={(item) => item.title}
                    renderItem={({ item }) => (
                        <NewsworthyItem
                            image={item.image}
                            title={item.title}
                            address={item.address}
                            price={item.price}
                            onPress={handlePress}
                        />
                    )}
                />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {renderHeader()}
                {renderSearch()}
                <ScrollView style={styles.scrollContainer}>
                    {renderPopularSection()}
                    {renderNewsworthy()}
                </ScrollView>
            </View>
            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.greyLight,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    headerContainer: {
        ...Gs.flexRow,
        ...Gs.itemsCenter,
        ...Gs.justifyBetween,
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
    },
    profileContainer: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    iconContainer: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    sectionContainer: {
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
    popularMainImage: {
        ...Gs.cornerXL,
        flex: 1,
        height: 200,
        marginRight: 10,
    },
    popularImage: {
        ...Gs.cornerMD,
        width: 130,
        height: 95,
        marginBottom: 10,
    },
    sectionTitle: {
        ...Gs.textBlack,
        marginBottom: 12,
    },
    popularContent: {
        ...Gs.flexRow,
        ...Gs.itemsCenter,
        ...Gs.justifyBetween,
    },
    popularPriceContainer: {
        ...Gs.justifyCenter,
        ...Gs.itemsCenter,
        ...Gs.cornerXS,
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: colors.secondary,
    },
    popularPriceLabel: {
        ...Gs.font600,
        ...Gs.textPrimary,
    },
    scrollContainer: {
        height: '100%',
    },
});

export default Home;
