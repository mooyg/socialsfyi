import { Body, Controller, Get, NotFoundException, Param, Req, Res } from '@nestjs/common'
import { ImageService } from './image.service'
import { Request, Response } from 'express'
import { uploadDir } from '../uploads/utils'

@Controller('image')
export class ImageController {
  constructor(private readonly _imageService: ImageService) {}

  @Get('/:uploadId')
  async getImage(
    @Param('uploadId') uploadId: string,
    @Body() userId: string,
    @Req() request: Request,
    @Res() response: Response
  ) {
    try {
      const imageData = await this._imageService.findImage(uploadId, request.user.id)
      return response.download(`${uploadDir}/${imageData.name}`)
    } catch {
      throw new NotFoundException()
    }
  }
}
