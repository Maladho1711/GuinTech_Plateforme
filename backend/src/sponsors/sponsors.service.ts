import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';

@Injectable()
export class SponsorsService {
  constructor(private prisma: PrismaService) {}

  async create(createSponsorDto: CreateSponsorDto) {
    return this.prisma.sponsor.create({
      data: createSponsorDto,
    });
  }

  async findAll() {
    return this.prisma.sponsor.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    });
  }

  async findOne(id: string) {
    const sponsor = await this.prisma.sponsor.findUnique({
      where: { id },
    });

    if (!sponsor) {
      throw new NotFoundException('Sponsor not found');
    }

    return sponsor;
  }

  async update(id: string, updateSponsorDto: UpdateSponsorDto) {
    return this.prisma.sponsor.update({
      where: { id },
      data: updateSponsorDto,
    });
  }

  async remove(id: string) {
    await this.prisma.sponsor.delete({
      where: { id },
    });

    return { message: 'Sponsor deleted successfully' };
  }
}

