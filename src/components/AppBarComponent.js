import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import {AppStyles} from '../utils/AppStyles';
import Themes from '../utils/Themes';
import {CommontStyles, AvatarIconStyle} from '../utils/CommonStyles';

class AppbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={[
          styles.appBar,
          {
            backgroundColor: this.props.appBarColor,
          },
        ]}>
        <View style={styles.headerLeftContainer}>
          {this.props.headerLeft ? (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Avatar.Icon
                icon="arrow-left"
                size={40}
                color={
                  this.props.headerLeftIconColor != undefined
                    ? this.props.headerLeftIconColor
                    : AppStyles.color.lightBlack
                }
                style={AvatarIconStyle.transparent}
              />
            </TouchableOpacity>
          ) : (
            <View style={{marginRight: 10}} />
          )}
          {this.props.title != undefined ? (
            <Title
              style={
                this.props.titleColor != undefined
                  ? [
                      styles.title,
                      {color: this.props.titleColor},
                      Themes.textExtraBold,
                    ]
                  : [styles.title, Themes.textSemiBold]
              }>
              {this.props.title}
            </Title>
          ) : null}
        </View>

        <View style={CommontStyles}>
          {this.props.headerRight ? (
            <TouchableOpacity
              onPress={() => {
                if (this.props.headerRightIconNavigation != undefined) {
                  this.props.navigation.navigate(
                    this.props.headerRightIconNavigation,
                  );
                }
              }}>
              <Avatar.Icon
                icon={this.props.headerRightIcon}
                size={40}
                color={
                  this.props.headerRightIconColor != undefined
                    ? this.props.headerRightIconColor
                    : AppStyles.color.black
                }
                style={AvatarIconStyle.transparent}
              />
            </TouchableOpacity>
          ) : (
            <Avatar.Icon
              icon="plus"
              size={40}
              color={AppStyles.color.primary}
              style={AvatarIconStyle.transparent}
            />
          )}
        </View>
      </View>
    );
  }
}

export default AppbarComponent;

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerLeftContainer: {
    flexDirection: 'row',
  },
  title: {
    color: AppStyles.color.mediumGrey,
    alignSelf: 'center',
  },
});
