import { ComicItem } from '../value-objects/comic-item'
import { EventItem } from '../value-objects/event-item'
import { SeriesItem } from '../value-objects/series-item'
import { StoryItem } from '../value-objects/story-item'
import { Thumbnail } from '../value-objects/thumbnail'
import { UrlItem } from '../value-objects/utl-item'

export type Character = {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: {
    available: number
    collectionURI: string
    items: ComicItem[]
    returned: number
  }
  series: {
    available: number
    collectionURI: string
    items: SeriesItem[]
    returned: number
  }
  stories: {
    available: number
    collectionURI: string
    items: StoryItem[]
    returned: number
  }
  events: {
    available: number
    collectionURI: string
    items: EventItem[]
    returned: number
  }
  urls: UrlItem[]
}
