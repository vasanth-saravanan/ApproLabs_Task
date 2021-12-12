import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Card, TextInput} from 'react-native-paper';
import {AppStyles} from '../utils/AppStyles';
import {APP_CONSTANTS} from '../utils/Constants';
import AppbarComponent from '../components/AppBarComponent';
import {CommontStyles} from '../utils/CommonStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Themes from '../utils/Themes';

class AddNewSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSwitchOn: true,
      isEnabled: true,
      dobPopup: new Date(),
      slotDateShow: false,
      startTimeShow: false,
      endTimeShow: false,
      slotType: 'day',
    };
  }

  onChangeSlotDate = () => {
    this.setState({slotDateShow: false});
  };

  onChangeSatrtTime = () => {
    this.setState({startTimeShow: false});
  };

  onChangeEndTime = () => {
    this.setState({endTimeShow: false});
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : null}
        style={CommontStyles.baseContainer}>
        <StatusBar backgroundColor={AppStyles.color.secondry} />
        <SafeAreaView style={CommontStyles.safeAreaContainer} />
        <AppbarComponent
          headerLeft={true}
          headerLeftIconColor={AppStyles.color.black}
          title={APP_CONSTANTS.addNewSlot}
          titleColor={AppStyles.color.black}
          navigation={this.props.navigation}
          appBarColor={AppStyles.color.primary}
        />
        <View style={styles.body}>
          <ScrollView>
            <Card>
              <Card.Content
                style={[styles.cardContent, {flexDirection: 'column'}]}>
                <TouchableOpacity
                  onPress={() => this.setState({slotDateShow: true})}
                  style={styles.groundDetailsInputStyle}>
                  <TextInput
                    mode="outlined"
                    placeholder="Slot Date*"
                    theme={Themes.textInput}
                    onChangeText={text => {}}
                    disabled={true}
                  />
                </TouchableOpacity>
                {this.state.slotDateShow ? (
                  <DateTimePicker
                    mode="date"
                    display={Platform.OS === 'android' ? 'calendar' : 'inline'}
                    value={this.state.dobPopup}
                    maximumDate={new Date(moment().subtract(16, 'years'))}
                    onChange={this.onChangeSlotDate}
                  />
                ) : null}
                <TouchableOpacity
                  onPress={() => this.setState({startTimeShow: true})}
                  style={styles.groundDetailsInputStyle}>
                  <TextInput
                    mode="outlined"
                    placeholder="Start Time*"
                    theme={Themes.textInput}
                    onChangeText={text => {}}
                    disabled={true}
                  />
                </TouchableOpacity>
                {this.state.startTimeShow ? (
                  <DateTimePicker
                    mode="time"
                    display={Platform.OS === 'android' ? 'clock' : 'inline'}
                    value={this.state.dobPopup}
                    maximumDate={new Date(moment().subtract(16, 'years'))}
                    onChange={this.onChangeSatrtTime}
                  />
                ) : null}

                <TouchableOpacity
                  onPress={() => this.setState({endTimeShow: true})}
                  style={styles.groundDetailsInputStyle}>
                  <TextInput
                    mode="outlined"
                    placeholder="End Time*"
                    theme={Themes.textInput}
                    onChangeText={text => {}}
                    disabled={true}
                  />
                </TouchableOpacity>
                {this.state.endTimeShow ? (
                  <DateTimePicker
                    mode="time"
                    display={Platform.OS === 'android' ? 'clock' : 'inline'}
                    value={this.state.dobPopup}
                    maximumDate={new Date(moment().subtract(16, 'years'))}
                    onChange={this.onChangeEndTime}
                  />
                ) : null}
                <TextInput
                  mode="outlined"
                  placeholder="Overs*"
                  keyboardType="number-pad"
                  theme={Themes.textInput}
                  style={styles.groundDetailsInputStyle}
                  onChangeText={text => {}}
                />
                <TextInput
                  mode="outlined"
                  placeholder="Amount*"
                  keyboardType="number-pad"
                  theme={Themes.textInput}
                  style={styles.groundDetailsInputStyle}
                  onChangeText={text => {}}
                />
                <TextInput
                  mode="outlined"
                  placeholder="Advance*"
                  keyboardType="number-pad"
                  theme={Themes.textInput}
                  style={styles.groundDetailsInputStyle}
                  onChangeText={text => {}}
                />
                <TextInput
                  mode="outlined"
                  placeholder="Discount"
                  keyboardType="number-pad"
                  theme={Themes.textInput}
                  style={styles.groundDetailsInputStyle}
                  onChangeText={text => {}}
                />
              </Card.Content>
            </Card>

            <Card>
              <Card.Content
                style={[styles.cardContent, {alignItems: 'center'}]}>
                <View style={styles.typeSelectionContainer}>
                  <Text style={[Themes.textMiniBold, Themes.textBlack]}>
                    Slot Type
                  </Text>
                </View>
                <View style={styles.typeSelectionRightContainer}>
                  <TouchableOpacity
                    onPress={() => this.setState({slotType: 'day'})}
                    style={
                      this.state.slotType == 'day'
                        ? [
                            styles.typeButton,
                            {backgroundColor: AppStyles.color.secondry},
                          ]
                        : styles.typeButton
                    }>
                    <Text
                      style={
                        this.state.slotType == 'day'
                          ? [
                              Themes.textMini,
                              Themes.textWhite,
                              {marginHorizontal: 10},
                            ]
                          : [
                              Themes.textMini,
                              Themes.textBlack,
                              {marginHorizontal: 10},
                            ]
                      }>
                      Day Light
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setState({slotType: 'flood'})}
                    style={
                      this.state.slotType == 'flood'
                        ? [
                            styles.typeButton,
                            {backgroundColor: AppStyles.color.secondry},
                          ]
                        : styles.typeButton
                    }>
                    <Text
                      style={
                        this.state.slotType == 'flood'
                          ? [
                              Themes.textMini,
                              Themes.textWhite,
                              {marginHorizontal: 10},
                            ]
                          : [
                              Themes.textMini,
                              Themes.textBlack,
                              {marginHorizontal: 10},
                            ]
                      }>
                      Flood Light
                    </Text>
                  </TouchableOpacity>
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

export default AddNewSlot;
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
  cardContent: {
    marginHorizontal: 5,
    flexDirection: 'row',
  },
  groundDetailsInputStyle: {
    backgroundColor: AppStyles.color.white,
    width: '100%',
    marginBottom: 10,
  },
  typeSelectionContainer: {
    flex: 0.5,
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
    padding: 10,
    backgroundColor: AppStyles.color.greyLight,
    borderRadius: 15,
  },
});
