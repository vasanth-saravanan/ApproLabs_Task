import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';
import {AppStyles} from '../utils/AppStyles';
import {APP_CONSTANTS} from '../utils/Constants';
import AppbarComponent from '../components/AppBarComponent';
import {CommontStyles} from '../utils/CommonStyles';
import Themes from '../utils/Themes';
import moment from 'moment';

class GroundStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          status: 'open',
          over: 30,
          lightStatus: 'Day light',
          startDate: '2021-12-12T16:52:48.000Z',
          endDate: '2021-12-12T18:52:48.000Z',
          advance: 10000,
          total: 25000,
          Discount: 20,
        },
        {
          id: 2,
          status: 'partial',
          over: 20,
          lightStatus: 'Day light',
          startDate: '2021-12-12T16:52:48.000Z',
          endDate: '2021-12-12T18:52:48.000Z',
          advance: 10000,
          total: 25000,
          Discount: 0,
        },
        {
          id: 3,
          status: 'booked',
          over: 30,
          lightStatus: 'Flood light',
          startDate: '2021-12-12T16:52:48.000Z',
          endDate: '2021-12-12T18:52:48.000Z',
          advance: 10000,
          total: 25000,
          Discount: 0,
        },
        {
          id: 4,
          status: 'booked',
          over: 30,
          lightStatus: 'Flood light',
          startDate: '2021-12-12T16:52:48.000Z',
          endDate: '2021-12-12T18:52:48.000Z',
          advance: 10000,
          total: 25000,
          Discount: 0,
        },
      ],
    };
  }
  render() {
    const renderItem = ({item}) => (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('SlotDetails');
        }}>
        <Card
          style={[
            styles.card,
            item.status == 'open'
              ? {backgroundColor: AppStyles.color.greenLight}
              : item.status == 'partial'
              ? {backgroundColor: AppStyles.color.redLight}
              : {backgroundColor: AppStyles.color.white},
          ]}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.leftContainer}>
              <Text style={[Themes.textMiniBold, Themes.textBlack]}>
                {moment(item.startDate).format('ddd, DD MMM (hh:mm a')} -{' '}
                {moment(item.endDate).format('hh:mm a)')}
              </Text>
              <Text style={[Themes.textExtraSmall, Themes.textBlack]}>
                {item.lightStatus} | {item.over} overs | Adv:{' '}
                {item.advance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                | Tot:{' '}
                {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </Text>
            </View>
            <View style={styles.hrSeparator} />
            <View style={styles.rightContainer}>
              <Text style={[Themes.textBlack, Themes.textMini]}>
                {item.status.toUpperCase()}
              </Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
    return (
      <View style={CommontStyles.baseContainer}>
        <StatusBar backgroundColor={AppStyles.color.secondry} />
        <SafeAreaView style={CommontStyles.safeAreaContainer} />
        <AppbarComponent
          headerLeft={true}
          headerRight={true}
          headerRightIcon={'playlist-plus'}
          headerLeftIconColor={AppStyles.color.black}
          headerRightIconColor={AppStyles.color.black}
          headerRightIconNavigation={'BookingHistory'}
          title={APP_CONSTANTS.groundName}
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

export default GroundStatus;
const styles = StyleSheet.create({
  flatList: {
    marginVertical: 5,
  },
  card: {
    backgroundColor: AppStyles.color.white,
    elevation: 1,
  },
  cardContent: {
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  separator: {
    height: 5,
  },
  noDataFound: {
    flex: 1,
    alignItems: 'center',
    marginTop: '5%',
  },
  leftContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  hrSeparator: {
    width: '2%',
  },
});
