import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {Card} from 'react-native-paper';
import {AppStyles} from '../utils/AppStyles';
import {APP_CONSTANTS} from '../utils/Constants';
import AppbarComponent from '../components/AppBarComponent';
import {CommontStyles} from '../utils/CommonStyles';
import Themes from '../utils/Themes';
import moment from 'moment';

class BookingHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          groundName: 'Chepauk',
          startDate: '2021-12-12T16:52:48.000Z',
          endDate: '2021-12-12T18:52:48.000Z',
          advance: 10000,
          total: 25000,
        },
        {
          id: 2,
          groundName: 'Eden Garden',
          startDate: '2021-12-12T16:52:48.000Z',
          endDate: '2021-12-12T18:52:48.000Z',
          advance: 10000,
          total: 25000,
        },
        {
          id: 3,
          groundName: 'Chinna Samy',
          startDate: '2021-12-12T16:52:48.000Z',
          endDate: '2021-12-12T18:52:48.000Z',
          advance: 10000,
          total: 25000,
        },
        {
          id: 4,
          groundName: 'Chepauk',
          startDate: '2021-12-12T16:52:48.000Z',
          endDate: '2021-12-12T18:52:48.000Z',
          advance: 10000,
          total: 25000,
        },
      ],
    };
  }

  SetState = value => {
    console.log(value);
  };
  render() {
    const renderItem = ({item}) => (
      <Card style={[styles.card]}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.leftContainer}>
            <Text style={[Themes.textMediumBold, Themes.textBlack]}>
              {item.groundName}
            </Text>
            <Text style={[Themes.textExtraSmall, Themes.textBlack]}>
              {moment(item.startDate).format('hh:mm a')} -{' '}
              {moment(item.endDate).format('hh:mm a')} | Adv:{' '}
              {item.advance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </View>
          <View style={styles.hrSeparator} />
          <View style={styles.rightContainer}>
            <Text style={[Themes.textExtraSmall, Themes.textBlack]}>
              {moment(item.startDate).format('ddd, DD MMM YYYY')}
            </Text>
            <Text style={[Themes.textMiniBold, Themes.textSecondary]}>
              {item.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </View>
        </Card.Content>
      </Card>
    );
    return (
      <View style={CommontStyles.baseContainer}>
        <StatusBar backgroundColor={AppStyles.color.secondry} />
        <SafeAreaView style={CommontStyles.safeAreaContainer} />
        <AppbarComponent
          headerLeft={true}
          headerRight={true}
          headerRightIcon={'filter-variant'}
          headerLeftIconColor={AppStyles.color.black}
          headerRightIconColor={AppStyles.color.black}
          setState={this.SetState}
          title={APP_CONSTANTS.bookingHistory}
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

export default BookingHistory;
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
    flex: 1,
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
