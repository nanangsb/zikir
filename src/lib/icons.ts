import noIcon from '$assets/no-icon.png'
import dailyDua from '$assets/daily-dua.png'
import selectedDua from '$assets/selected-dua.png'
import morningDhikr from '$assets/morning-dhikr.png'
import eveningDhikr from '$assets/evening-dhikr.png'
import dhikrAfterSalah from '$assets/dhikr-after-salah.png'
import hajiUmroh from '$assets/hajj.png'
import wudhu from '$assets/wudhu.png'
import shalat from '$assets/shalat.png'
import mosque from '$assets/mosque.png'
import sleeping from '$assets/sleeping.png'
import ramadhan from '$assets/lantern.png'

export const icons = (slug: string) => {
  const icons = {
    'daily-dua': dailyDua,
    'selected-dua': selectedDua,
    'morning-dhikr': morningDhikr,
    'evening-dhikr': eveningDhikr,
    'dhikr-after-salah': dhikrAfterSalah,
    'haji-umroh': hajiUmroh,
    'wudhu': wudhu,
    'sholat': shalat,
    'masjid': mosque,
    'tidur': sleeping,
    'ramadhan': ramadhan,
  }

  return icons[slug] || noIcon
}
