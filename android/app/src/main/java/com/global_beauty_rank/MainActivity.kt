package com.global_beauty_rank

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle
import androidx.appcompat.app.AppCompatDelegate

import com.revenuecat.purchases.CustomerInfo
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.EntitlementInfo
import com.revenuecat.purchases.Offering
import com.revenuecat.purchases.models.Period
import com.revenuecat.purchases.models.Price
import com.revenuecat.purchases.models.StoreProduct

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "global_beauty_rank"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)

    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
  }
}
