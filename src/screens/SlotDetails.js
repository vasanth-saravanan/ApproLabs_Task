import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Card, TextInput, Avatar, Switch} from 'react-native-paper';
import {AppStyles} from '../utils/AppStyles';
import {APP_CONSTANTS} from '../utils/Constants';
import AppbarComponent from '../components/AppBarComponent';
import {CommontStyles, AvatarIconStyle} from '../utils/CommonStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Themes from '../utils/Themes';

class SlotDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: true,
      isEnabled: true,
      dobPopup: new Date(),
      dateTimeShow: false,
    };
  }

  onChange = () => {
    this.setState({dateTimeShow: false});
  };

  render() {
    const onToggleSwitch = () =>
      this.setState({
        isSwitchOn: !this.state.isSwitchOn,
        isEnabled: !this.state.isEnabled,
      });
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : null}
        style={CommontStyles.baseContainer}>
        <StatusBar backgroundColor={AppStyles.color.secondry} />
        <SafeAreaView style={CommontStyles.safeAreaContainer} />
        <AppbarComponent
          headerLeft={true}
          headerRight={true}
          headerRightIcon={'square-edit-outline'}
          headerRightIconNavigation={'AddNewSlot'}
          headerLeftIconColor={AppStyles.color.black}
          headerRightIconColor={AppStyles.color.black}
          title={APP_CONSTANTS.slotDetails}
          titleColor={AppStyles.color.black}
          navigation={this.props.navigation}
          appBarColor={AppStyles.color.primary}
        />
        <View style={styles.body}>
          <ScrollView>
            <Card style={[styles.card]}>
              <Card.Content style={styles.cardContent}>
                <Image
                  style={styles.Image}
                  source={{uri: 'https://picsum.photos/700'}}
                />
                <View style={styles.companyDetailContainer}>
                  <View style={styles.justifyContent}>
                    <Text style={[Themes.textMediumBold, Themes.textBlack]}>
                      ApproLabs Private Limited
                    </Text>
                    <Text style={[Themes.textMini, Themes.textGrey]}>
                      Caption name | 1234567890
                    </Text>
                  </View>
                </View>
              </Card.Content>
            </Card>
            <Card style={[styles.card]}>
              <Card.Content style={styles.cardContent}>
                <Image
                  style={styles.Image}
                  source={{uri: 'https://picsum.photos/700'}}
                />
                <View style={styles.companyDetailContainer}>
                  <View style={styles.justifyContent}>
                    <TouchableOpacity style={styles.addButton}>
                      <Text style={[Themes.textMiniBold, Themes.textBlack]}>
                        ADD TEAM MANUALLY
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content
                style={[styles.cardContent, {flexDirection: 'column'}]}>
                <View style={styles.textInputRowContainer}>
                  <TextInput
                    mode="outlined"
                    keyboardType="number-pad"
                    placeholder="Overs"
                    theme={Themes.textInput}
                    style={styles.oversTextInputStyle}
                    onChangeText={text => {}}
                  />

                  <TouchableOpacity
                    onPress={() => this.setState({dateTimeShow: true})}
                    style={styles.textInputStyle}>
                    <TextInput
                      mode="outlined"
                      placeholder="Start DateTime"
                      theme={Themes.textInput}
                      onChangeText={text => {}}
                      disabled={true}
                    />
                  </TouchableOpacity>
                  {this.state.dateTimeShow ? (
                    <DateTimePicker
                      mode="date"
                      display={
                        Platform.OS === 'android' ? 'calendar' : 'inline'
                      }
                      value={this.state.dobPopup}
                      maximumDate={new Date(moment().subtract(16, 'years'))}
                      onChange={this.onChange}
                    />
                  ) : null}
                </View>
                <TextInput
                  mode="outlined"
                  placeholder="Ground Name"
                  theme={Themes.textInput}
                  style={styles.groundDetailsInputStyle}
                  onChangeText={text => {}}
                />
                <TextInput
                  mode="outlined"
                  placeholder="Ground Area"
                  theme={Themes.textInput}
                  style={styles.groundDetailsInputStyle}
                  onChangeText={text => {}}
                />
              </Card.Content>
            </Card>

            <Card>
              <Card.Content style={[styles.cardContent]}>
                <View style={styles.typeSelectionContainer}>
                  <Text style={[Themes.textMiniBold, Themes.textBlack]}>
                    Ball Type
                  </Text>
                </View>
                <View style={styles.typeSelectionRightContainer}>
                  <TouchableOpacity style={styles.typeButton}>
                    <Avatar.Icon
                      icon="tennis-ball"
                      size={30}
                      color={AppStyles.color.secondry}
                      style={AvatarIconStyle.transparent}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.typeButton}>
                    <Avatar.Icon
                      icon="tennis-ball"
                      size={30}
                      color={AppStyles.color.secondry}
                      style={AvatarIconStyle.transparent}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.typeButton}>
                    <Avatar.Icon
                      icon="tennis-ball"
                      size={30}
                      color={AppStyles.color.secondry}
                      style={AvatarIconStyle.transparent}
                    />
                  </TouchableOpacity>
                </View>
              </Card.Content>

              <Card.Content style={[styles.cardContent, {marginTop: 15}]}>
                <View style={styles.typeSelectionContainer}>
                  <Text style={[Themes.textMiniBold, Themes.textBlack]}>
                    Match Offcials
                  </Text>
                </View>
                <View style={styles.typeSelectionRightContainer}>
                  <TouchableOpacity style={styles.typeButton}>
                    <Avatar.Icon
                      icon="tennis-ball"
                      size={30}
                      color={AppStyles.color.secondry}
                      style={AvatarIconStyle.transparent}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.typeButton}>
                    <Avatar.Icon
                      icon="tennis-ball"
                      size={30}
                      color={AppStyles.color.secondry}
                      style={AvatarIconStyle.transparent}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.typeButton}>
                    <Avatar.Icon
                      icon="tennis-ball"
                      size={30}
                      color={AppStyles.color.secondry}
                      style={AvatarIconStyle.transparent}
                    />
                  </TouchableOpacity>
                </View>
              </Card.Content>

              <Card.Content style={[styles.cardContent, {marginTop: 15}]}>
                <View style={styles.typeSelectionContainer}>
                  <Text style={[Themes.textMiniBold, Themes.textBlack]}>
                    Wagon Wheel
                  </Text>
                </View>
                <View
                  style={[
                    styles.typeSelectionRightContainer,
                    {justifyContent: 'flex-end'},
                  ]}>
                  <Switch
                    trackColor={{
                      true: AppStyles.color.secondryLight,
                      false: AppStyles.color.greyLight,
                    }}
                    thumbColor={
                      this.state.isEnabled
                        ? AppStyles.color.secondry
                        : AppStyles.color.greyDark
                    }
                    value={this.state.isSwitchOn}
                    onValueChange={onToggleSwitch}
                  />
                </View>
              </Card.Content>
            </Card>
          </ScrollView>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.schedule}>
            <Text style={[Themes.textMedium, Themes.textWhite]}>SCHEDULE</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SlotDetails;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: AppStyles.color.white,
  },
  footer: {
    padding: 10,
    paddingBottom: 0,
    alignItems: 'center',
    backgroundColor: AppStyles.color.white,
  },
  schedule: {
    backgroundColor: AppStyles.color.secondry,
    paddingHorizontal: 50,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  card: {
    backgroundColor: AppStyles.color.white,
    borderBottomWidth: 2,
    borderBottomColor: AppStyles.color.greyDark,
  },
  cardContent: {
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  Image: {
    height: 50,
    width: '15%',
    marginVertical: 5,
  },
  companyDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    flexWrap: 'wrap',
  },
  justifyContent: {
    justifyContent: 'center',
  },
  addButton: {
    padding: 7,
    borderWidth: 1,
    borderColor: AppStyles.color.black,
    borderRadius: 5,
  },
  oversTextInputStyle: {
    backgroundColor: AppStyles.color.white,
    width: '30%',
    marginBottom: 5,
  },
  textInputStyle: {
    backgroundColor: AppStyles.color.white,
    width: '60%',
    marginBottom: 5,
  },
  groundDetailsInputStyle: {
    backgroundColor: AppStyles.color.white,
    width: '100%',
    marginBottom: 5,
  },
  textInputRowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typeSelectionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  typeSelectionRightContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  typeButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: AppStyles.color.black,
    borderRadius: 10,
  },
});
