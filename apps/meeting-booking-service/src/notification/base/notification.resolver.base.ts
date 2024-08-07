/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Notification } from "./Notification";
import { NotificationCountArgs } from "./NotificationCountArgs";
import { NotificationFindManyArgs } from "./NotificationFindManyArgs";
import { NotificationFindUniqueArgs } from "./NotificationFindUniqueArgs";
import { CreateNotificationArgs } from "./CreateNotificationArgs";
import { UpdateNotificationArgs } from "./UpdateNotificationArgs";
import { DeleteNotificationArgs } from "./DeleteNotificationArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { User } from "../../user/base/User";
import { NotificationService } from "../notification.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Notification)
export class NotificationResolverBase {
  constructor(
    protected readonly service: NotificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async _notificationsMeta(
    @graphql.Args() args: NotificationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Notification])
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "any",
  })
  async notifications(
    @graphql.Args() args: NotificationFindManyArgs
  ): Promise<Notification[]> {
    return this.service.notifications(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Notification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "read",
    possession: "own",
  })
  async notification(
    @graphql.Args() args: NotificationFindUniqueArgs
  ): Promise<Notification | null> {
    const result = await this.service.notification(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Notification)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "create",
    possession: "any",
  })
  async createNotification(
    @graphql.Args() args: CreateNotificationArgs
  ): Promise<Notification> {
    return await this.service.createNotification({
      ...args,
      data: {
        ...args.data,

        appointment: args.data.appointment
          ? {
              connect: args.data.appointment,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Notification)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "update",
    possession: "any",
  })
  async updateNotification(
    @graphql.Args() args: UpdateNotificationArgs
  ): Promise<Notification | null> {
    try {
      return await this.service.updateNotification({
        ...args,
        data: {
          ...args.data,

          appointment: args.data.appointment
            ? {
                connect: args.data.appointment,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Notification)
  @nestAccessControl.UseRoles({
    resource: "Notification",
    action: "delete",
    possession: "any",
  })
  async deleteNotification(
    @graphql.Args() args: DeleteNotificationArgs
  ): Promise<Notification | null> {
    try {
      return await this.service.deleteNotification(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Appointment, {
    nullable: true,
    name: "appointment",
  })
  @nestAccessControl.UseRoles({
    resource: "Appointment",
    action: "read",
    possession: "any",
  })
  async getAppointment(
    @graphql.Parent() parent: Notification
  ): Promise<Appointment | null> {
    const result = await this.service.getAppointment(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(@graphql.Parent() parent: Notification): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}