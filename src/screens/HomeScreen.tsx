import {Image} from '@rneui/themed';
import React from 'react';
import {FlatList} from 'react-native';
import {Card, List} from 'react-native-paper';

export interface IHomeScreenProps {
  albums: Array<any>;
  fetchMore: () => void;
}

function HomeScreen(props: IHomeScreenProps) {
  const keyExtractor = (item: any, index: number) => index.toString();

  function renderItem({item}: {item: any}) {
    return (
      <List.Section
        style={{
          flex: 1,
          paddingHorizontal: 5,
        }}>
        <Card style={{borderRadius: 0}} elevation={5}>
          <Image
            style={{height: 200}}
            source={{uri: item?.['im:image']?.[2]?.label}}
          />
          <List.Item title={item?.['im:name']?.label} />
        </Card>
      </List.Section>
    );
  }

  function loadMore() {
    console.log("List reaches it's end...");
    props?.fetchMore();
  }

  return (
    <FlatList
      key={'name-image-flat-list'}
      keyExtractor={keyExtractor}
      data={props?.albums}
      renderItem={renderItem}
      numColumns={2}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
    />
  );
}

export default HomeScreen;
