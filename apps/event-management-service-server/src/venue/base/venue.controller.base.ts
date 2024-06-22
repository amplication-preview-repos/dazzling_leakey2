/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VenueService } from "../venue.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VenueCreateInput } from "./VenueCreateInput";
import { Venue } from "./Venue";
import { VenueFindManyArgs } from "./VenueFindManyArgs";
import { VenueWhereUniqueInput } from "./VenueWhereUniqueInput";
import { VenueUpdateInput } from "./VenueUpdateInput";
import { EventFindManyArgs } from "../../event/base/EventFindManyArgs";
import { Event } from "../../event/base/Event";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VenueControllerBase {
  constructor(
    protected readonly service: VenueService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Venue })
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVenue(@common.Body() data: VenueCreateInput): Promise<Venue> {
    return await this.service.createVenue({
      data: data,
      select: {
        capacity: true,
        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Venue] })
  @ApiNestedQuery(VenueFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async venues(@common.Req() request: Request): Promise<Venue[]> {
    const args = plainToClass(VenueFindManyArgs, request.query);
    return this.service.venues({
      ...args,
      select: {
        capacity: true,
        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Venue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async venue(
    @common.Param() params: VenueWhereUniqueInput
  ): Promise<Venue | null> {
    const result = await this.service.venue({
      where: params,
      select: {
        capacity: true,
        createdAt: true,
        id: true,
        location: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Venue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVenue(
    @common.Param() params: VenueWhereUniqueInput,
    @common.Body() data: VenueUpdateInput
  ): Promise<Venue | null> {
    try {
      return await this.service.updateVenue({
        where: params,
        data: data,
        select: {
          capacity: true,
          createdAt: true,
          id: true,
          location: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Venue })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVenue(
    @common.Param() params: VenueWhereUniqueInput
  ): Promise<Venue | null> {
    try {
      return await this.service.deleteVenue({
        where: params,
        select: {
          capacity: true,
          createdAt: true,
          id: true,
          location: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/events")
  @ApiNestedQuery(EventFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async findEvents(
    @common.Req() request: Request,
    @common.Param() params: VenueWhereUniqueInput
  ): Promise<Event[]> {
    const query = plainToClass(EventFindManyArgs, request.query);
    const results = await this.service.findEvents(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        endDate: true,
        id: true,
        name: true,
        organizer: true,
        startDate: true,
        updatedAt: true,

        venue: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/events")
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "update",
    possession: "any",
  })
  async connectEvents(
    @common.Param() params: VenueWhereUniqueInput,
    @common.Body() body: EventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      events: {
        connect: body,
      },
    };
    await this.service.updateVenue({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/events")
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "update",
    possession: "any",
  })
  async updateEvents(
    @common.Param() params: VenueWhereUniqueInput,
    @common.Body() body: EventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      events: {
        set: body,
      },
    };
    await this.service.updateVenue({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/events")
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "update",
    possession: "any",
  })
  async disconnectEvents(
    @common.Param() params: VenueWhereUniqueInput,
    @common.Body() body: EventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      events: {
        disconnect: body,
      },
    };
    await this.service.updateVenue({
      where: params,
      data,
      select: { id: true },
    });
  }
}
