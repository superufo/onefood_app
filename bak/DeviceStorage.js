import React from  'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Promise from 'es6-promise'
Promise.polyfill()

class DeviceStorage {
    /**
     * 获取
     * @param key
     * @returns {Promise<T>|*|Promise.<TResult>}  async   authToken
     */
    static async get(key) {
           var ret = null ;
           try {
              ret = await AsyncStorage.getItem(key);
              if( ret!=null && ret==String &&  ret!=""  ){
                  ret =  JSON.parse(ret);
              }

            } catch (error) {
               return null ;
            }

            return  ret;
    }


  static async getPromise(key){
        try {
           const value = await AsyncStorage.getItem(key);
           return value ;
        } catch (error) {
           return null;
       }
   }

    /**
     * 保存
     * @param key
     * @param value
     * @returns {*}
     */
    static save(key, value) {
        if ( typeof value == Object )  {
           //console.log("DeviceStorage save key Object:",key," value:",JSON.stringify(value));
           return AsyncStorage.setItem(key, JSON.stringify(value));
        }

        //console.log("DeviceStorage save key String:",key," value:",value);
        return AsyncStorage.setItem(key, value);
    }


    /**
     * 更新
     * @param key
     * @param value
     * @returns {Promise<T>|Promise.<TResult>}
     */
    static update(key, value) {
        return DeviceStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);

            if ( typeof value ==Object ) {
                return AsyncStorage.setItem(key, JSON.stringify(value));
            } else if ( typeof value ==Object )  {
               return AsyncStorage.setItem(key, value);
            }
            //return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }


    /**
     * 更新
     * @param key
     * @returns {*}
     */
    static remove(key) {
        return AsyncStorage.removeItem(key);
    }
}

export default DeviceStorage;