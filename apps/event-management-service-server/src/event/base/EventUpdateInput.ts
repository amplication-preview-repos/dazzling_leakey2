/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { RegistrationUpdateManyWithoutEventsInput } from "./RegistrationUpdateManyWithoutEventsInput";
import { VenueWhereUniqueInput } from "../../venue/base/VenueWhereUniqueInput";

@InputType()
class EventUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  organizer?: string | null;

  @ApiProperty({
    required: false,
    type: () => RegistrationUpdateManyWithoutEventsInput,
  })
  @ValidateNested()
  @Type(() => RegistrationUpdateManyWithoutEventsInput)
  @IsOptional()
  @Field(() => RegistrationUpdateManyWithoutEventsInput, {
    nullable: true,
  })
  registrations?: RegistrationUpdateManyWithoutEventsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => VenueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VenueWhereUniqueInput)
  @IsOptional()
  @Field(() => VenueWhereUniqueInput, {
    nullable: true,
  })
  venue?: VenueWhereUniqueInput | null;
}

export { EventUpdateInput as EventUpdateInput };
