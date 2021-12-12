import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import {AppStyles} from '../utils/AppStyles';
import {APP_CONSTANTS} from '../utils/Constants';
import AppbarComponent from '../components/AppBarComponent';
import {CommontStyles, AvatarIconStyle} from '../utils/CommonStyles';
import Themes from '../utils/Themes';
import moment from 'moment';

class GroundListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          groundName: 'Eden Garden',
          photo: 'https://picsum.photos/700',
          areaName: 'Kolkata',
          createdOn: '2021-12-12T16:52:48.000Z',
        },
        {
          id: 2,
          groundName: 'Sydney',
          photo: 'https://picsum.photos/700',
          areaName: 'Autralia',
          createdOn: '2021-12-13T16:52:48.000Z',
        },
        {
          id: 3,
          groundName: 'Chepauk',
          photo: 'https://picsum.photos/700',
          areaName: 'Chennai',
          createdOn: '2021-12-14T16:52:48.000Z',
        },
      ],
    };
  }
  render() {
    const renderItem = ({item}) => (
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Text style={[Themes.textMediumBold, Themes.textBlack]}>
            {item.groundName}
          </Text>
          <Image style={styles.groundImage} source={{uri: item.photo}} />
          <View style={CommontStyles.flexDirectionRow}>
            <Avatar.Icon
              icon="map-marker"
              size={30}
              color={AppStyles.color.greyDark}
              style={AvatarIconStyle.transparent}
            />
            <View style={styles.groundNameContainer}>
              <Text style={Themes.textMini}>
                {item.areaName} | Created on{' '}
                {moment(item.createdOn).format('DD MMM YYYY')}
              </Text>
            </View>
          </View>
        </Card.Content>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={[Themes.textMiniBold, Themes.textWhite]}>
              SHARE VIA
            </Text>
          </TouchableOpacity>
          <View style={styles.verticalSeparator}></View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={[Themes.textMiniBold, Themes.textWhite]}>
              EDIT VIA
            </Text>
            <Avatar.Icon
              icon="square-edit-outline"
              size={30}
              color={AppStyles.color.white}
              style={AvatarIconStyle.transparent}
            />
          </TouchableOpacity>
          <View style={styles.verticalSeparator}></View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('GroundStatus')}
            style={styles.manageSlotButton}>
            <Text style={[Themes.textMiniBold, Themes.textWhite]}>
              MANAGE SLOTS
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
    return (
      <View style={CommontStyles.baseContainer}>
        <StatusBar backgroundColor={AppStyles.color.secondry} />
        <SafeAreaView style={CommontStyles.safeAreaContainer} />
        <AppbarComponent
          headerLeft={false}
          headerRight={true}
          headerRightIcon={'plus'}
          headerRightIconColor={AppStyles.color.black}
          title={APP_CONSTANTS.groundListTitle}
          titleColor={AppStyles.color.black}
          navigation={this.props.navigation}
          appBarColor={AppStyles.color.primary}
        />
        <FlatList
          style={styles.flatList}
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <View style={styles.noDataFound}>
              <Text style={[Themes.textMedium, Themes.textBlack]}>
                No data found
              </Text>
            </View>
          }
        />
      </View>
    );
  }
}

export default GroundListScreen;
const styles = StyleSheet.create({
  flatList: {
    marginVertical: 5,
  },
  card: {
    elevation: 1,
  },
  cardContent: {
    marginHorizontal: 5,
  },
  groundImage: {
    height: 150,
    width: '100%',
    marginVertical: 5,
    borderRadius: 10,
  },
  groundNameContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    top: 4,
  },
  separator: {
    height: 2,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: AppStyles.color.secondry,
    width: '32%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  editButton: {
    backgroundColor: AppStyles.color.secondry,
    flexDirection: 'row',
    paddingLeft: 15,
    width: '32%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  manageSlotButton: {
    backgroundColor: AppStyles.color.secondry,
    width: '34%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  verticalSeparator: {
    width: '1%',
  },
  noDataFound: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%',
  },
});
