import noIcon from '$assets/no-icon.png'
import dailyDua from '$assets/daily-dua.png'
import selectedDua from '$assets/selected-dua.png'
import morningDhikr from '$assets/morning-dhikr.png'
import eveningDhikr from '$assets/evening-dhikr.png'
import dhikrAfterSalah from '$assets/dhikr-after-salah.png'

export const icons = (slug: string) => {
  const icons = {
    'daily-dua': dailyDua,
    'selected-dua': selectedDua,
    'morning-dhikr': morningDhikr,
    'evening-dhikr': eveningDhikr,
    'dhikr-after-salah': dhikrAfterSalah,
    'haji-umroh': selectedDua,
  }

  return icons[slug] || noIcon
}
