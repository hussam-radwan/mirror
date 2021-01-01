export interface AccuWeatherForcast {
  Headline: Headline,
  DailyForecasts: DailyForecasts[]
}

interface Headline {
  EffectiveDate: Date,
  EffectiveEpochDate: number,
  Severity: number,
  Text: string,
  Category: string,
  EndDate: Date,
  EndEpochDate: number,
  MobileLink: string
  Link: string
}

interface Sun {
  Rise: Date,
  EpochRise: number,
  Set: Date,
  EpochSet: number
}

interface Moon {
  Rise: Date,
  EpochRise: number,
  Set: Date,
  EpochSet: number,
  Phase: string,
  Age: number
}

interface Temperature {
  Minimum: MeasurementUnit,
  Maximum: MeasurementUnit
}

interface MeasurementUnit {
  Value: number,
  Unit: string,
  UnitType: number
}

interface DegreeDaySummary {
  Heating: MeasurementUnit,
  Cooling: MeasurementUnit
}

interface AirAndPollen {
  Name: string,
  Value: number,
  Category: string,
  CategoryValue: number,
  Type: string
}

interface LocalSource {
  Id: number,
  Name: string,
  WeatherCode: string
}

interface PartOfDay {
  Icon: number,
  IconPhrase: string,
  LocalSource: LocalSource,
  ShortPhrase: string,
  LongPhrase: string,
  PrecipitationProbability: number,
  ThunderstormProbability: number,
  RainProbability: number,
  SnowProbability: number,
  IceProbability: number,
  Wind: Wind,
  WindGust: WindGust,
  TotalLiquid: MeasurementUnit,
  Rain: MeasurementUnit,
  Snow: MeasurementUnit,
  Ice: MeasurementUnit,
  HoursOfPrecipitation: number,
  HoursOfRain: number,
  HoursOfSnow: number,
  HoursOfIce: number,
  CloudCover: number
}

interface WindGust {
  Speed: MeasurementUnit
}

interface Direction {
  Degrees: number,
  Localized: string,
  English: string
}

interface Wind extends WindGust {
  Direction: Direction
}

interface DailyForecasts {
  Date: Date,
  EpochDate: number,
  Sun: Sun,
  Moon: Moon,
  Temperature: Temperature,
  RealFeelTemperature: Temperature,
  RealFeelTemperatureShade: Temperature,
  HoursOfSun: number,
  DegreeDaySummary: DegreeDaySummary,
  AirAndPollen: AirAndPollen,
  Day: PartOfDay,
  Night: PartOfDay,
  Sources: string,
  MobileLink: string,
  Link: string,
  DailyForecast: DailyForecast,
}
interface DailyForecastPartOfDay {
  HasPrecipitation: boolean,
  Precipitation: string,
  PrecipitationIntensity: string
}

interface DailyForecast {
  Day: DailyForecastPartOfDay,
  Night: DailyForecastPartOfDay
}
