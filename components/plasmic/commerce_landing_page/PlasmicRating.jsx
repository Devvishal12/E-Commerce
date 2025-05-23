// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: riVYfd7Jgv4QCX85Q24XGF
// Component: go_qwgRsSvwe
import * as React from "react";
import { useRouter } from "next/router";
import {
  PlasmicIcon as PlasmicIcon__,
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: riVYfd7Jgv4QCX85Q24XGF/projectcss
import sty from "./PlasmicRating.module.css"; // plasmic-import: go_qwgRsSvwe/css
import EmptyStarIcon from "./icons/PlasmicIcon__EmptyStar"; // plasmic-import: ZeWtWlRNz7wy/icon
import FullStarIcon from "./icons/PlasmicIcon__FullStar"; // plasmic-import: _RAIKXQWlAcd/icon
import HalfStarIcon from "./icons/PlasmicIcon__HalfStar"; // plasmic-import: VTKvCL729AUF/icon

createPlasmicElementProxy;

export const PlasmicRating__VariantProps = new Array("rating");

export const PlasmicRating__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRating__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "rating",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.rating
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "half")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : hasVariant($state, "rating", "one")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg___1LKhn, {
          [sty.svgrating_five___1LKhnqmsQb]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf___1LKhnBef4V]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four___1LKhnSBilr]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_half___1LKhnFzv3]: hasVariant(
            $state,
            "rating",
            "half"
          ),
          [sty.svgrating_oneHalf___1LKhnPUa7Z]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_one___1LKhns8J7P]: hasVariant($state, "rating", "one"),
          [sty.svgrating_threeHalf___1LKhnDJu0I]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three___1LKhnNlnKo]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf___1LKhnb7VNu]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two___1LKhnaIdxX]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "oneHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : hasVariant($state, "rating", "two")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg___2WIe5, {
          [sty.svgrating_five___2WIe5QmsQb]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf___2WIe5Bef4V]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four___2WIe5SBilr]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_oneHalf___2WIe5PUa7Z]: hasVariant(
            $state,
            "rating",
            "oneHalf"
          ),
          [sty.svgrating_threeHalf___2WIe5DJu0I]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three___2WIe5NlnKo]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf___2WIe5B7VNu]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          ),
          [sty.svgrating_two___2WIe5AIdxX]: hasVariant($state, "rating", "two")
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "twoHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : hasVariant($state, "rating", "three")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__olBjX, {
          [sty.svgrating_five__olBjXqmsQb]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__olBjXBef4V]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four__olBjXsBilr]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf__olBjXdJu0I]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          ),
          [sty.svgrating_three__olBjXNlnKo]: hasVariant(
            $state,
            "rating",
            "three"
          ),
          [sty.svgrating_twoHalf__olBjXb7VNu]: hasVariant(
            $state,
            "rating",
            "twoHalf"
          )
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? FullStarIcon
            : hasVariant($state, "rating", "threeHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : hasVariant($state, "rating", "four")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg___8EhL7, {
          [sty.svgrating_five___8EhL7QmsQb]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf___8EhL7Bef4V]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          ),
          [sty.svgrating_four___8EhL7SBilr]: hasVariant(
            $state,
            "rating",
            "four"
          ),
          [sty.svgrating_threeHalf___8EhL7DJu0I]: hasVariant(
            $state,
            "rating",
            "threeHalf"
          )
        })}
        role={"img"}
      />

      <PlasmicIcon__
        PlasmicIconType={
          hasVariant($state, "rating", "fourHalf")
            ? HalfStarIcon
            : hasVariant($state, "rating", "five")
            ? FullStarIcon
            : EmptyStarIcon
        }
        className={classNames(projectcss.all, sty.svg__xaVtW, {
          [sty.svgrating_five__xaVtWqmsQb]: hasVariant(
            $state,
            "rating",
            "five"
          ),
          [sty.svgrating_fourHalf__xaVtWBef4V]: hasVariant(
            $state,
            "rating",
            "fourHalf"
          )
        })}
        role={"img"}
      />
    </Stack__>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRating__ArgProps,
          internalVariantPropNames: PlasmicRating__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRating__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRating";
  } else {
    func.displayName = `PlasmicRating.${nodeName}`;
  }
  return func;
}

export const PlasmicRating = Object.assign(
  // Top-level PlasmicRating renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicRating
    internalVariantProps: PlasmicRating__VariantProps,
    internalArgProps: PlasmicRating__ArgProps
  }
);

export default PlasmicRating;
/* prettier-ignore-end */
